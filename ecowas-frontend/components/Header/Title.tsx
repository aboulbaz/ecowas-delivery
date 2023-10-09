import { FormattedMessage } from "react-intl";
import { CustomH1, CustomPTag, TitleWrapper } from "./Header.style";
import Image from "next/image";
import BackIcon from "@/../public/assets/icons/back-icon.svg";
import { useRouter } from "next/router";
import Link from "next/link";

const Title = () => {
  const router = useRouter();

  return (
    <TitleWrapper>
      {router.pathname !== "/overview" && (
        <Link href={"/overview"}>
          <Image src={BackIcon} alt="" width={30} />
        </Link>
      )}
      <div>
        <CustomH1>
          <FormattedMessage
            id={"layout.title"}
            defaultMessage={"defaultMessage"}
          />
        </CustomH1>
        <CustomPTag>
          <FormattedMessage
            id={"layout.sub-title"}
            defaultMessage={"defaultMessage"}
          />
        </CustomPTag>
      </div>
    </TitleWrapper>
  );
};

export default Title;
