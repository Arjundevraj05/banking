import React, { useCallback, useEffect, useState } from 'react'
import { Button } from './ui/button'
import { PlaidLinkOnSuccess, PlaidLinkOptions, usePlaidLink } from 'react-plaid-link'
import { useRouter } from 'next/navigation';
import { createLinkToken, exchangePublicToken } from '@/lib/actions/user.actions';
import Image from 'next/image';

const PlaidLink = ({ user, variant }: PlaidLinkProps) => {
  const router = useRouter();
  const [token, setToken] = useState('');
  const [error, setError] = useState<string | null>(null); // Add error state to handle consent errors

  useEffect(() => {
    const getLinkToken = async () => {
      try {
        const data = await createLinkToken({
          user,
          products: ['transactions'], // Ensure 'transactions' product is requested here
        });

        setToken(data?.linkToken);
      } catch (err) {
        console.error("Error creating link token:", err);
        setError("Failed to create link token. Please try again.");
      }
    }

    getLinkToken();
  }, [user]);

  const onSuccess = useCallback<PlaidLinkOnSuccess>(async (public_token: string) => {
    try {
      await exchangePublicToken({
        publicToken: public_token,
        user,
      });

      router.push('/');
    } catch (err) {
      // Check if it's a consent error and handle re-authentication if needed
      if (err.response?.data?.error_code === 'ADDITIONAL_CONSENT_REQUIRED') {
        setError("Additional consent is required to access transactions. Please reconnect.");
      } else {
        console.error("Error exchanging public token:", err);
        setError("Failed to exchange token. Please try again.");
      }
    }
  }, [user, router]);

  const config: PlaidLinkOptions = {
    token,
    onSuccess,
    onExit: (err) => {
      if (err) {
        setError("An error occurred during the connection process. Please try again.");
      }
    },
  };

  const { open, ready } = usePlaidLink(config);
  
  return (
    <>
      {error && (
        <div className="error-message text-red-500">
          {error}
        </div>
      )}
      
      {variant === 'primary' ? (
        <Button
          onClick={() => open()}
          disabled={!ready}
          className="plaidlink-primary"
        >
          Connect bank
        </Button>
      ) : variant === 'ghost' ? (
        <Button onClick={() => open()} variant="ghost" className="plaidlink-ghost">
          <p className='hiddenl text-[16px] font-semibold text-black-2 xl:block'>Connect bank</p>
        </Button>
      ) : (
        <Button onClick={() => open()} className="plaidlink-default">
          <Image 
            src="/icons/connect-bank.svg"
            alt="connect bank"
            width={24}
            height={24}
          />
          <p className='text-[16px] font-semibold text-black-2'>Connect bank</p>
        </Button>
      )}
    </>
  )
}

export default PlaidLink
