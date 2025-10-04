import { ReactNode } from "react";
import TOC from "./TOC";

export default function LabsLayout({
  children,
 }: Readonly<{ children: ReactNode }>) {
  return (
    <div>
      <div className="mb-3">
        <TOC/>
      </div>
      <div>{children}</div>
    </div>
 );}
 
// export default function LabsLayout({
//  children,
// }: Readonly<{ children: ReactNode }>) {
//  return (
//    <table>
//      <tbody>
//        <tr>
//          <td valign="top" width="100px">
//            <TOC />
//          </td>
//          <td valign="top">{children}</td>
//        </tr>
//      </tbody>
//    </table>
// );}
