import { Facebook, LinkedIn } from '@mui/icons-material';
import styles from './home.module.css';

const Card = ({
  data,
}: {
  data: { name: string; position: string; image: string };
}) => {
  return (
    <>
      <div
        className={`${styles.card} max-w-[200px] overflow-hidden rounded-lg border-t-[1px] border-gray-200 bg-white shadow-sm shadow-gray-400 md:max-w-xs`}
      >
        <img className="w-full" src={data.image} alt={data.name} />
        <div className="px-4 py-3">
          <div className="mb-2 text-center text-base font-bold text-slate-600">
            <p>{data.name}</p>
            <p className="font-medium text-pink-600">{data.position}</p>
          </div>
        </div>
        <div className="flex items-center justify-center bg-pink-900 px-6 pb-2 pt-4">
          <span className="py-1/3 mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 text-blue-600 [&>svg]:w-5">
            <Facebook />
          </span>
          <span className="py-1/3 mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 text-blue-500 [&>svg]:w-5">
            <LinkedIn />
          </span>
          {/* <Twitter className="text-blue-500" /> */}
          <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 [&>svg]:w-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-[0.85rem] w-[0.85rem]"
              viewBox="0 0 512 512"
              fill="#3b82f6"
            >
              <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
            </svg>
          </span>
        </div>
      </div>
    </>
  );
};

export default Card;
