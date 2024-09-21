import useCreateBucketUrl from "@/app/hooks/useCreateBucketUrl"
import { MenuItemFollowCompTypes } from "@/app/types"
import { VerifiedOutlined } from "@mui/icons-material"
import Link from "next/link"

export default function MenuItemFollow({ user }: MenuItemFollowCompTypes) {

    return (
        <>
            <Link
                href={`/profile/${user?.id}`}
                className="flex items-center hover:bg-gray-100 rounded-md w-full py-1.5 px-2"
            >
                <img
                    className="rounded-full lg:mx-0 mx-auto"
                    width="35"
                    src={useCreateBucketUrl(user?.image)}
                />
                <div className="lg:pl-2.5 lg:block hidden">
                    <div className="flex items-center">
                        <p className="font-bold text-[14px] truncate">
                            {user?.name}
                        </p>
                        <div className="bg-sky-500 ml-1 rounded-full w-[24px] h-[24px] flex items-center justify-center">
                            <VerifiedOutlined className="text-white" fontSize="small" />
                        </div>


                    </div>

                    <p className="font-light text-[12px] text-gray-600">
                        {user?.name}
                    </p>
                </div>
            </Link>
        </>
    )
}
