import { BrowserRouter ,Route } from "react-router-dom";
import AllTeachers from './Component/AllTeachers';
import HomeNewTeacher from "./Component/HomeNewTeacher";
import HomeTeacher from './Component/HomeTeacher';

import TeacherLogin from "./Component/TeacherLogin";
import TeacherProfile from "./Component/TeacherProfile";
import TeacherSignUp from "./Component/TeacherSignUp";


import HomeNewStudent from "./Component/HomeNewStudent";
import StudentRegisterDetails from "./Component/StudentRegisterDetails";
import StudentRegister from "./Component/StudentRegister";
import HomeStudent from "./Component/HomeStudent";
import StudentLogin from "./Component/StudentLogin";
import StudentProfile from "./Component/StudentProfile";
import EnrolledSubject from "./Component/EnrolledSubject";


function App() {
  return (
    <BrowserRouter>
   <Route path="/homeTeacher" exact component={HomeTeacher}/>
 <Route path="/teacherAlll" exact component={AllTeachers}/>
 <Route path="/teacherProfile/:id" exact component={TeacherProfile}/>
 
 <Route path="/teacherSignUp" exact component={TeacherSignUp}/>
 <Route path="/homeNewTeacher" exact component={HomeNewTeacher}/>
 
 <Route path="/teacherSignIn" exact component={TeacherLogin}/>














 <Route path="/homeNewStudent" exact component={HomeNewStudent}/>
 <Route path="/studentRegisterDetails" exact component={StudentRegisterDetails}/>
 <Route path="/onlineStudentRegister" exact component={StudentRegister}/>
 <Route path="/homeStudent" exact component={HomeStudent}/>
 <Route path="/studentLogin" exact component={StudentLogin}/>
 <Route path="/gets/:id" exact component={StudentProfile}/>
 <Route path="/enrolledSubject" exact component={EnrolledSubject}/>

    </BrowserRouter>
    
  );
}

export default App;
