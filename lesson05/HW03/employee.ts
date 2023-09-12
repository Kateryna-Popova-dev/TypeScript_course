import {Status} from "./Enums";
import Intern from "./intern";

type Employee = Intern & {
    status: Status;
    department: string | 'unknown'
}
export default Employee;