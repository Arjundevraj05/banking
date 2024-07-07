import HeaderBox from '@/components/HeaderBox'
import RecentTransactions from '@/components/RecentTransactions';
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import { getAccount, getAccounts } from '@/lib/actions/bank.actions';
import { getLoggedInUser } from '@/lib/actions/user.actions';

const Home = async ({ searchParams: { id, page } }: SearchParamProps) => {
  const currentPage = Number(page as string) || 1;
  
  const loggedIn = await getLoggedInUser();
  if (!loggedIn) {
    console.error('User is not logged in');
    // You can redirect the user to the login page or show an appropriate message
    return (
      <section className="home">
        <div className="home-content">
          <header className="home-header">
            <HeaderBox 
              type="greeting"
              title="Welcome"
              user="Guest"
              subtext="Please log in to access and manage your account and transactions."
            />
          </header>
        </div>
      </section>
    );
  }

  const accounts = await getAccounts({ 
    userId: loggedIn.$id 
  });

  if (!accounts) {
    console.error('Accounts not found for user:', loggedIn.$id);
    // Handle the case where accounts are not found
    return (
      <section className="home">
        <div className="home-content">
          <header className="home-header">
            <HeaderBox 
              type="greeting"
              title="Welcome"
              user={loggedIn.firstName || 'Guest'}
              subtext="No accounts found. Please add an account to manage your transactions."
            />
          </header>
        </div>
      </section>
    );
  }

  const accountsData = accounts.data;
  const appwriteItemId = (id as string) || accountsData[0]?.appwriteItemId;

  const account = await getAccount({ appwriteItemId });

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox 
            type="greeting"
            title="Welcome"
            user={loggedIn.firstName || 'Guest'}
            subtext="Access and manage your account and transactions efficiently."
          />

          <TotalBalanceBox 
            accounts={accountsData}
            totalBanks={accounts.totalBanks}
            totalCurrentBalance={accounts.totalCurrentBalance}
          />
        </header>

        <RecentTransactions 
          accounts={accountsData}
          transactions={account?.transactions}
          appwriteItemId={appwriteItemId}
          page={currentPage}
        />
      </div>

      <RightSidebar 
        user={loggedIn}
        transactions={account?.transactions}
        banks={accountsData?.slice(0, 2)}
      />
    </section>
  );
}

export default Home;
