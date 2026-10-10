"use client";
import AddNodeBtn from "../components/AddNodeBtn";
import AddMenu from "../components/AddMenu"
import CourseNode from "../components/CourseNode";
import type { CourseNode as CourseNodeData } from "../types/CourseNode";
import { useState } from "react";

export default function Planner() {
    const [showAddMenu, setShowAddMenu] = useState(false);
    const DSA: CourseNodeData = {
        courseCode: "CS 3502",
        courseName: "Data Structures and Algorithms",
        prerequisites: [],
    }
    
    return (
        <main className="planner-page">
            <h1>hi this it the planner</h1>
            <AddNodeBtn onClick={() => setShowAddMenu(true)} />
            {showAddMenu && (<AddMenu onCancel={() => setShowAddMenu(false)} /> )}
            <CourseNode course={DSA} />
        </main>
    );
}