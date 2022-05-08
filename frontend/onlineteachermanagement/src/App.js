import { BrowserRouter ,Route } from "react-router-dom";
import addLesson from "./Component/addLesson";
import addMeeting from "./Component/addMeeting";
import AllMeetings from "./Component/AllMeetings";
import AllLessons from "./Component/AllLessons";
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
import mySubject from "./Component/mySubject";
import OnlineStudentProfileUpdate from "./Component/OnlineStudentProfileUpdate";
import updateMySubjects from "./Component/updateMySubjects";
import Module1 from "./Component/Module1";
import Module2 from "./Component/Module2";
import Module4 from "./Component/Module4";
import Module3 from "./Component/Module3";
import FileSubmitPage from "./Component/FileSubmitPage";
import ClassDetailsNw from "./Component/ClassDetailsNw";

function App() {
  return (
    <BrowserRouter>
   <Route path="/homeTeacher" exact component={HomeTeacher}/>
 <Route path="/teacherAlll" exact component={AllTeachers}/>
 <Route path="/teacherProfile/:id" exact component={TeacherProfile}/>
<Route path="/teacherSignUp" exact component={TeacherSignUp}/>
 <Route path="/homeNewTeacher" exact component={HomeNewTeacher}/>
<Route path="/teacherSignIn" exact component={TeacherLogin}/>
<Route path="/addLesson" exact component={addLesson}/>
 <Route path="/addMeeting" exact component={addMeeting}/>
 <Route path="/AllMeetings" exact component={AllMeetings}/>
 <Route path="/AllLessons" exact component={AllLessons}/>















 <Route path="/homeNewStudent" exact component={HomeNewStudent}/>
 <Route path="/studentRegisterDetails" exact component={StudentRegisterDetails}/>
 <Route path="/onlineStudentRegister" exact component={StudentRegister}/>
 <Route path="/homeStudent" exact component={HomeStudent}/>
 <Route path="/studentLogin" exact component={StudentLogin}/>
 <Route path="/gets/:id" exact component={StudentProfile}/>
 <Route path="/enrolledSubject" exact component={EnrolledSubject}/>
 <Route path="/mySubject" exact component={mySubject}/>
 <Route path="/onlineUpdate/:id" exact component={OnlineStudentProfileUpdate}/>
 <Route path="/updateOnlinePayment/:id" exact component={updateMySubjects}></Route>
 <Route path="/module1" exact component={Module1}/>
 <Route path="/module2" exact component={Module2}/>
 <Route path="/module3" exact component={Module3}/>
 <Route path="/module4" exact component={Module4}/>
 <Route path="/fileSubmit" exact component={FileSubmitPage}/>
 <Route path="/classDetailsNw" exact component={ClassDetailsNw}/>


    </BrowserRouter>
    
  );
}

export default App;
