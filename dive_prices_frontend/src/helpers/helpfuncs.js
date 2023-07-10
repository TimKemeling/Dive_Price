export const scrollTop =() => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      })
}

export const ApiUrls = {
  Schoollist : 'http://127.0.0.1:8000/api/school-list',
  CourseList : 'http://127.0.0.1:8000/api/course-list',
  CourseDetail : 'http://127.0.0.1:8000/api/course-detail',
  BeginnerOverview: 'http://127.0.0.1:8000/api/beginner-overview',
  AdvancedOverview : 'http://127.0.0.1:8000/api/advanced-overview',
  ProOverview : 'http://127.0.0.1:8000/api/pro-overview',
  TechOverview : 'http://127.0.0.1:8000/api/tech-overview',
  FundivingOverview : 'http://127.0.0.1:8000/api/fundiving-overview',
  CoursesBySchool : 'http://127.0.0.1:8000/api/courses-by-school/',
  SchoolsByLocation : 'http://127.0.0.1:8000/api/schools-by-location',
  Bookings : 'http://127.0.0.1:8000/api/bookings',
  BookingConfirm : 'http://127.0.0.1:8000/api/booking/confirm/',
}

export const businessName = 'DivePrices'