// import CardWrapper from './cards';
// import PaginationAWB from './paginations/pagination-awb';
// import PaginationCustomer from './paginations/pagination-customer';
// import { AwbTable, CustomersTable } from './tables';

// export default async function DashboardContents() {
//   await new Promise((resolve) => setTimeout(resolve, 3000));
//   return (
//     <div className="flex flex-col items-center justify-center gap-y-7 divide-y-4 divide-dotted divide-gray-300 md:gap-y-14">
//       <div className="mx-auto w-full">
//         <CardWrapper />
//       </div>
//       <div className="hidden w-full justify-center pt-14 md:flex">
//         <div>
//           <CustomersTable />
//           <div className="mt-2 flex w-full justify-center">
//             <PaginationCustomer totalPages={120} />
//           </div>
//         </div>
//       </div>
//       <div className="hidden w-full justify-center pt-14 md:flex">
//         <div>
//           <AwbTable />
//           <div className="mt-2 flex w-full justify-center">
//             <PaginationAWB totalPages={100} />
//           </div>
//         </div>
//       </div>
//       <div className="block w-full pt-4 text-center font-semibold md:hidden">
//         Login to PC for better User Experience{' '}
//       </div>
//     </div>
//   );
// }
