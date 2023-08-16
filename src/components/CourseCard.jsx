function CourseCard({ course }) {
    return (
        <div className="course-item">
            <div className="course-item__img">
                <img src={course.imageUrl} alt="img-1" />
            </div>
            <div className="course-item__detail">
                <CourseCardBody title={course.title} description={course.description} rate={course.rate} />
                <CourseCardFooter course={course} />

            </div>
        </div>
    )
}
export default CourseCard;


function CourseCardBody({ title, description, rate }) {
    return <div className="course-item__body">
        <div>
            <p className="title">{title}</p>
            <p className="desc">{description}</p>
        </div>
        <span className="rate">⭐️ {rate}</span>
    </div>

}
function CourseCardFooter({ course }) {
    const createdAt = new Date(course.start).toLocaleDateString("en-US", {
        month: "short",
        year: "numeric",
        day: "numeric",
    })
    return <div className="course-item__footer">
        <div className="tags">
            {course.tags.map((tag, index) => {
                return (
                    <span key={index} className="badge badge--secondary">{tag}</span>
                )
            })}
        </div>
        <div className="caption">
            <span className="date">{createdAt}</span>
            <span className={`badge ${course.status === "Active" ? 'badge--primary' : course.status === "Upcoming" ? "badge--danger" : "badge--secondary"}`}>{course.status}</span>
        </div>
    </div >
}