import { Outlet } from 'react-router';

function Layout() {
    return (
        <>
            <main className='h-full'>
                <Outlet />
            </main>
        </>
    )
}

export default Layout;