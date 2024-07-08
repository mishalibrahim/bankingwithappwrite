import HeaderBox from "@/components/HeaderBox"
import RightSideBar from "@/components/RightSideBar"
import TotalBalanceBox from "@/components/TotalBalanceBox"


const Home = () => {
  const loggedIn = { firstName: "Mishal" ,lastName:"Ibrahim",email:"er.mishalibrahim@gmail.com"}
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
            title="welcome"
            type="greeting"
            user={loggedIn?.firstName || "guest"}
            subtext="access and manage your Account and transaction efficiently"
          />
          <TotalBalanceBox 
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={1250.35 } />
        </header>

        Recent Transactions
      </div>
      <RightSideBar user={loggedIn} transactions={[]} banks={[{currentBalance:123.50},{currentBalance:350.20}]} />
    </section>
  )
}

export default Home