'use client';

import SearchIcon from '@mui/icons-material/Search';
// import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import { Dispatcher } from '@/app/lib/definitions';

export interface SearchQueryState {
  // placeholder: string;
  queryTerm: string;
  handleSearchTerm: Dispatcher<string>;
}

const SearchAWB: React.FC<SearchQueryState> = ({
  // placeholder,
  queryTerm,
  handleSearchTerm,
}) => {
  // const [queryTerm, setQueryTerm] = useState<string>("");
  // const searchParams = useSearchParams();
  // const pathname = usePathname();
  // const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((e) => {
    console.log(e.target.value, '::::');
    e.preventDefault();
    const term = e.target.value;
    if (term) {
      handleSearchTerm(() => term);
    }
  }, 300);

  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm font-medium text-gray-500 shadow-sm placeholder:italic placeholder:text-gray-500 hover:shadow-none focus:border-pink-900 focus:opacity-50 focus:outline-2 focus:ring-1 focus:ring-pink-900 md:text-base md:tracking-wider"
        placeholder="Search for air way bill..."
        onChange={(e) => handleSearch(e)}
        defaultValue={queryTerm}
      />
      <SearchIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-pink-900 peer-focus:opacity-50" />
    </div>
  );
};

export default SearchAWB;
