import { createRouter, createWebHistory } from "vue-router";
import StudyMain from "../components/study/StudyMain.vue";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import Main from "../components/Main.vue";
import Admin from "../components/AdminMain.vue";
import AdminUserManagement from "../components/AdminUserManagement.vue";
import Admin112 from "../components/Admin112.vue";
import calender from "../components/calendar/Calendar.vue"
//router 인스턴스 생성
const router = createRouter({
    history:createWebHistory(),
    routes: [
        {path: "/",
            components: {default:Main, header:Header, footer:Footer}
        },
        {path: "/studyMain",
            components: {default:StudyMain, header:Header, footer:Footer}
        },
        {path: "/admin/notice",
            components: {default:Admin, header:Header, footer:Footer}
        },
        {path: "/admin/112",
            components: {default:Admin112, header:Header, footer:Footer}
        },
        {path: "/admin/user",
            components: {default:AdminUserManagement, header:Header, footer:Footer}
        },
        {path: "/user/calender",
            components: {default:Calender, header:Header, footer:Footer}
        }
    ]
});

// router 인스턴스 내보내기 -> main.js에서 등록
export default router;