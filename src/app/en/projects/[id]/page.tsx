import type { Metadata } from "next";
import ProjectDetails from "@/components/ProjectDetails";
import { projects } from "@/data/projects";

type Props = { params: Promise<{ id: string }> };

export function generateStaticParams() { return projects.map((project) => ({ id: project.id.toString() })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((item) => item.id.toString() === id);
  return project ? { title: `${project.title.en} | Leonardo Filho`, description: project.shortDescription.en } : { title: "Project not found" };
}
export default async function Page({ params }: Props) { return <ProjectDetails id={(await params).id} locale="en"/>; }
