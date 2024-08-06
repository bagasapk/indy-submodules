import { IcLogo } from "@/assets";
import clsx from "clsx";
import { FC } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

interface Props {
  className?: string;
  logoOnly?: boolean;
}
const NDMLogo: FC<Props> = ({ className, logoOnly }) => {
  return (
    <Link
      to={"/dashboard/overview"}
      className={clsx("logo flex gap-4 items-center", className)}
    >
      <img src={IcLogo} alt="logo" width={20} />
      {!logoOnly && (
        <div>
          <h1 className="text-red-ndm">INDY</h1>
          <p className="text-black">
            <span>I</span>ntegrated <span>N</span>etwork <span>D</span>ata
            Qualit
            <span>Y</span>
          </p>
        </div>
      )}
    </Link>
  );
};

export default NDMLogo;
