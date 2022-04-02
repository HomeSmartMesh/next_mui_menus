import NavTabs from './NavTabs'

const Layout = ({ children }) => {
  return (
    <>
      <NavTabs />
      <div >
        <main >
          {children}
        </main>
      </div>
    </>
  )
}

export default Layout
