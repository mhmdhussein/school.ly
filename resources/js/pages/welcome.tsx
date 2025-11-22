import AppLogoIcon from '@/components/app-logo-icon';
import { login, register } from '@/routes';
import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';

export default function Welcome({
    canRegister = true,
}: {
    canRegister?: boolean;
}) {
    const { auth } = usePage<SharedData>().props;
    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
                    rel="stylesheet"
                />
            </Head>

            <div className="min-h-screen bg-gradient-to-br from-white via-rose-50 to-rose-100 dark:from-[#060606] dark:via-[#0d0202] dark:to-[#170707]">
                <div className="mx-auto max-w-6xl px-6 py-12 lg:py-20">
                    <header className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="rounded-md bg-white/80 p-2 shadow-md dark:bg-white/5">
                                <AppLogoIcon />
                            </div>
                            <div>
                                <h2 className="text-lg font-semibold text-[#1b1b18] dark:text-[#EDEDEC]">
                                    Schoolly
                                </h2>
                                <p className="text-xs text-[#6b6b68] dark:text-[#A9A9A4]">
                                    Multi-tenant School Management
                                </p>
                            </div>
                        </div>

                        <nav className="flex items-center gap-3 text-sm">
                            {auth.user ? (
                                <Link
                                    href="/dashboard"
                                    className="rounded-md bg-rose-600 px-4 py-2 text-white shadow-sm hover:bg-rose-700"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={login()}
                                        className="rounded-md px-4 py-2 text-[#1b1b18] hover:underline dark:text-[#EDEDEC]"
                                    >
                                        Log in
                                    </Link>
                                    {canRegister && (
                                        <Link
                                            href={register()}
                                            className="rounded-md border border-rose-600 px-4 py-2 text-rose-600 hover:bg-rose-50 dark:border-rose-400 dark:text-rose-300"
                                        >
                                            Register
                                        </Link>
                                    )}
                                </>
                            )}
                        </nav>
                    </header>

                    <main className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-center">
                        <section>
                            <h1 className="text-3xl leading-tight font-extrabold text-[#111] dark:text-[#F7F7F6]">
                                Welcome to Schoolly
                            </h1>
                            <p className="mt-4 max-w-xl text-base text-[#555] dark:text-[#BDBDB8]">
                                A secure, multi-tenant school management system
                                to manage tenants, students, teachers, courses
                                and enrollments, all from a single, elegant
                                dashboard tailored for schools.
                            </p>

                            <div className="mt-8 flex gap-3">
                                {auth.user ? (
                                    <Link
                                        href="/dashboard"
                                        className="inline-flex items-center gap-2 rounded-md bg-rose-600 px-5 py-3 text-white shadow hover:bg-rose-700"
                                    >
                                        Go to Dashboard
                                    </Link>
                                ) : (
                                    <>
                                        <Link
                                            href={login()}
                                            className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-[#1b1b18] shadow hover:bg-gray-50 dark:bg-[#111] dark:text-[#EDEDEC]"
                                        >
                                            Log in
                                        </Link>
                                        {canRegister && (
                                            <Link
                                                href={register()}
                                                className="inline-flex items-center gap-2 rounded-md border border-rose-600 px-5 py-3 text-rose-600 hover:bg-rose-50 dark:border-rose-400 dark:text-rose-300"
                                            >
                                                Get started
                                            </Link>
                                        )}
                                    </>
                                )}
                            </div>

                            <div className="mt-8 grid gap-4 sm:grid-cols-2">
                                <div className="rounded-lg border border-[#efe7e7] bg-white/60 p-4 shadow-sm dark:border-[#241212] dark:bg-[#0b0b0b]">
                                    <strong>Tenants</strong>
                                    <div className="text-xs text-[#666] dark:text-[#9b9b97]">
                                        Create and isolate schools, each with
                                        its own users and data.
                                    </div>
                                </div>
                                <div className="rounded-lg border border-[#efe7e7] bg-white/60 p-4 shadow-sm dark:border-[#241212] dark:bg-[#0b0b0b]">
                                    <strong>Users</strong>
                                    <div className="text-xs text-[#666] dark:text-[#9b9b97]">
                                        Manage students, teachers and staff with
                                        roles and permissions.
                                    </div>
                                </div>
                                <div className="rounded-lg border border-[#efe7e7] bg-white/60 p-4 shadow-sm dark:border-[#241212] dark:bg-[#0b0b0b]">
                                    <strong>Courses</strong>
                                    <div className="text-xs text-[#666] dark:text-[#9b9b97]">
                                        Define courses, schedules and assign
                                        teachers easily.
                                    </div>
                                </div>
                                <div className="rounded-lg border border-[#efe7e7] bg-white/60 p-4 shadow-sm dark:border-[#241212] dark:bg-[#0b0b0b]">
                                    <strong>Reports</strong>
                                    <div className="text-xs text-[#666] dark:text-[#9b9b97]">
                                        Attendance, performance and enrollment
                                        reports per tenant.
                                    </div>
                                </div>
                            </div>
                        </section>

                        <aside className="relative flex items-center justify-center">
                            <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg dark:bg-[#0e0e0e]">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="text-lg font-semibold text-[#111] dark:text-[#F7F7F6]">
                                            Multi-tenant overview
                                        </h3>
                                        <p className="mt-2 text-sm text-[#6b6b68] dark:text-[#A9A9A4]">
                                            Each tenant (school) has isolated
                                            data, users and settings,
                                            switchable by admins.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </main>
                </div>
            </div>
        </>
    );
}
