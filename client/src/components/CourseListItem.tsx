const CourseListItem = ({ courseData }: { courseData: ICourse }) => {
  return (
    <div
      className="course bg-white p-3 rounded-3xl h-20 flex flex-row items-center gap-3 border-2 border-slate-200 select-none hover:cursor-pointer"
      style={{ border: "1px solid #e2e8f0" }}
    >
      <div className="course__icon bg-red-200 h-full rounded-[12px] aspect-square grid place-items-center text-3xl">
        { courseData.icon }
      </div>
      <div className="course__information">
        <p className="font-bold text-xl">{courseData.name}</p>
        <p className="">by {courseData.author}</p>
      </div>
    </div>
  )
}

export default CourseListItem