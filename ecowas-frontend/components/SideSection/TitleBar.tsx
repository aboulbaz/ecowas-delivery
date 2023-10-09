import { useRouter } from "next/router";
import {
  SectionDropdownWrapper,
  TitleBarPage,
  TitleBarSub,
  TitleBarWrapper,
} from "./SideSection.style";
import { FormattedMessage } from "react-intl";
import { titleDispatcher } from "utils/constants";
import SectionDropdown from "./SectionDropdown";

type Props = {
  isContainer: boolean;
};

const TitleBar: React.FC<Props> = ({ isContainer }) => {
  const router = useRouter();
  return (
    <TitleBarWrapper isContainer={isContainer}>
      <div>
        <TitleBarPage>
          <FormattedMessage
            id={titleDispatcher[router.pathname]}
            defaultMessage={"defaultMessage"}
          />
        </TitleBarPage>
        <TitleBarSub>
          <FormattedMessage
            id={"layout.sidebar-sub-title"}
            defaultMessage={"defaultMessage"}
          />
        </TitleBarSub>
      </div>
      {isContainer && <SectionDropdown />}
    </TitleBarWrapper>
  );
};

export default TitleBar;
