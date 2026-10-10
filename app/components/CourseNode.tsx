import type { CourseNode } from "../types/CourseNode";

type NodeProps = {
    course: CourseNode;
};

export default function Node({ course }: NodeProps) {
    
    return (
        <div className="node">
            <h3>{course.courseCode}</h3>
        </div>
    )
}