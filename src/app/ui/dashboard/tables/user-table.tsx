import clsx from 'clsx';
import { roboto } from '../../fonts';
import { TD, TH } from './table-extensions';
// import { DeleteCustomer, UpdateCustomer } from '../buttons';
import { BusinessRounded, Delete, Edit } from '@mui/icons-material';
import { formatDateToLocal } from '@/app/lib/utils';
import { fetchUsers } from '@/app/lib/data';

export const UsersTable = async () => {
  const users = await fetchUsers();

  return (
    <div className="flow-root ">
      <div className="inline-block w-full align-middle md:min-w-full">
        <div className=" overflow-x-auto rounded-lg bg-gray-50 p-2 dark:bg-zinc-900 md:pt-0">
          <table className=" min-w-full">
            <caption className="caption-top">
              <div className="mb-4 mt-4 flex w-full justify-center">
                <h3
                  className={clsx(
                    roboto.className,
                    'flex text-lg font-bold text-gray-500 underline underline-offset-4 dark:text-slate-400 md:text-xl',
                  )}
                >
                  Table: Users
                </h3>
              </div>
            </caption>
            <thead className="sticky top-0 rounded-lg bg-pink-300 text-left text-sm font-normal">
              <tr className="[&:first-child>th:first-child]:rounded-tl-lg [&:first-child>th:last-child]:rounded-tr-lg">
                <TH className="border-r sm:pl-6">Full Name</TH>
                <TH className="border-r">Email</TH>
                <TH className="border-r">Created Date</TH>
                <TH className="relative">
                  <span className="sr-only">Actions</span>
                </TH>
                <TH className="relative">
                  <span>Actions</span>
                </TH>
              </tr>
            </thead>
            <tbody className="z-0">
              {users?.map((user) => (
                <tr
                  key={user.id}
                  className="w-full border-b-2 bg-white py-3 text-sm odd:bg-pink-50 last-of-type:border-none dark:border-zinc-900 dark:bg-zinc-800 dark:odd:bg-opacity-50 [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <TD className="border-r-2 dark:border-zinc-900 sm:pl-6">
                    <div className="flex items-center gap-3">
                      <span className="rounded-full border-2 border-slate-400 bg-slate-200 p-2 dark:border-pink-900 dark:bg-black">
                        <BusinessRounded className=" text-pink-900" />
                      </span>
                      <p>
                        {user.first_name} {user.last_name}
                      </p>
                    </div>
                  </TD>
                  <TD className="border-r-2 dark:border-zinc-900">
                    {user.email}
                  </TD>
                  <TD className="border-r-2 dark:border-zinc-900">
                    {formatDateToLocal(user.created_at)}
                  </TD>
                  <TD>{''}</TD>
                  <TD>
                    <div className="flex justify-start gap-3">
                      {/* <UpdateCustomer id={''} />
                      <DeleteCustomer id={''} /> */}
                      <Edit className="cursor-not-allowed text-pink-900" />
                      <Delete className="cursor-not-allowed text-pink-900" />
                    </div>
                  </TD>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
