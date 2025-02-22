import { PropsWithChildren, ReactNode } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import DropdownData from '@/Components/DropdownData';
import { Link } from '@inertiajs/react';
import { User } from '@/types';

export default function Authenticated({ user, header, children }: PropsWithChildren<{ user: User, header?: ReactNode }>) {
    return (
        <div className="min-h-screen flex">
            {/* Sidebar */}
            <aside className="w-64 bg-white border-r border-gray-200 p-4">
                <div className="flex items-center justify-center">
                    <Link href="/">
                        <ApplicationLogo className="block h-10 w-auto fill-current text-gray-800" />
                    </Link>
                </div>
                <nav className="mt-6 flex flex-col pt-5">
                    <NavLink href={route('dashboard')} active={route().current('dashboard')}>
                        Home
                    </NavLink>

                    <DropdownData />
                </nav>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col w-full">
                {/* Navbar */}
                <nav className="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
                    <div className="text-lg font-semibold text-center w-full">{header}</div>
                    <div className="relative">
                        <Dropdown>
                            <Dropdown.Trigger>
                                <button
                                    type="button"
                                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-900 focus:outline-none"
                                >
                                    {user.name}
                                    <svg
                                        className="ml-2 h-4 w-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </button>
                            </Dropdown.Trigger>

                            <Dropdown.Content>
                                <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                                <Dropdown.Link href={route('logout')} method="post" as="button">
                                    Log Out
                                </Dropdown.Link>
                            </Dropdown.Content>
                        </Dropdown>
                    </div>
                </nav>

                {/* Page Content */}
                <main className="p-6">{children}</main>
            </div>
        </div>
    );
}
