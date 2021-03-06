import * as Input from "./input/input";
import * as TextBlock from "./text-block/text-block";
import * as MainTitle from "./main-title/main-title";
import * as SectionTitle from "./section-title/section-title";
import * as Loading from "./loading/loading";
import * as RequestError from "./request-error/request-error";

const InputUI = Input.default;
const TextBlockUI = TextBlock.default;
const MainTitleUI = MainTitle.default;
const SectionTitleUI = SectionTitle.default;
const LoadingUI = Loading.default;
const RequestErrorUI = RequestError.default;

export {
  InputUI,
  TextBlockUI,
  MainTitleUI,
  SectionTitleUI,
  LoadingUI,
  RequestErrorUI
};
