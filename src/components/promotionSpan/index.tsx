import * as S from "./styles";
import Link from "next/link";

import { VscDebugBreakpointLogUnverified } from "react-icons/vsc";

const PromotionSpan = () => {
     return (
          <S.Conteiner>
               <Link href="/telefonia">
                    <pre className="first">
                         tem cumpom! <VscDebugBreakpointLogUnverified /> <span>black friday</span>{" "}
                         <VscDebugBreakpointLogUnverified /> tem cumpom! <VscDebugBreakpointLogUnverified />{" "}
                         <span>black friday</span> <VscDebugBreakpointLogUnverified /> tem cumpom!{" "}
                         <VscDebugBreakpointLogUnverified /> <span>black friday</span> <VscDebugBreakpointLogUnverified /> tem
                         cumpom! <VscDebugBreakpointLogUnverified /> <span>black friday</span> <VscDebugBreakpointLogUnverified />
                    </pre>

                    <pre className="second">
                         tem cumpom! <VscDebugBreakpointLogUnverified /> <span>black friday</span>{" "}
                         <VscDebugBreakpointLogUnverified /> tem cumpom! <VscDebugBreakpointLogUnverified />{" "}
                         <span>black friday</span> <VscDebugBreakpointLogUnverified /> tem cumpom!{" "}
                         <VscDebugBreakpointLogUnverified /> <span>black friday</span> <VscDebugBreakpointLogUnverified />
                    </pre>
               </Link>
          </S.Conteiner>
     );
};

export default PromotionSpan;
