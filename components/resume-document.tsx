import { ResumePage } from "../lib/types";
import { Document, Font, Page, StyleSheet, Text, View, Link } from "@react-pdf/renderer";

const grays = {
    "50": "#f9fafb",
    "100": "#f3f4f6",
    "200": "#e5e7eb",
    "300": "#d1d5db",
    "400": "#9ca3af",
    "500": "#6b7280",
    "600": "#4b5563",
    "700": "#374151",
    "800": "#1f2937",
    "900": "#111827",
};

Font.register({
    family: "Inter",
    fonts: [
        { src: "/fonts/Inter-Regular.ttf" },
        {
            src: "/fonts/Inter-Light.ttf",
            fontWeight: 400,
        },
        { src: "/fonts/Inter-SemiBold.ttf", fontWeight: 600 },
    ],
});

const styles = StyleSheet.create({
    page: {
        paddingVertical: 32,
        paddingHorizontal: 36,
        fontFamily: "Inter",
        color: grays["900"],
    },
    header: {
        marginBottom: 12,
    },
    name: {
        fontSize: 20,
        fontWeight: "semibold",
        marginBottom: 4,
    },
    subtitle: {
        fontSize: 14,
        color: grays["600"],
    },
    itemContainer: {
        fontSize: 12,
        marginBottom: 10,
    },
    itemHeader: {
        display: "flex",
        flexDirection: "row",
        marginBottom: 2,
    },
    itemTitle: {
        fontWeight: 600,
        marginRight: 10,
        color: grays["900"],
        textDecoration: "none",
    },
    itemDescription: {
        color: grays["700"],
    },
    section: {
        marginTop: 12,
    },
    sectionTitle: {
        fontSize: 14,
        marginBottom: 8,
        fontWeight: "semibold",
        textTransform: "uppercase",
    },
    itemAccessory: {
        color: grays["500"],
    },
});

function formatDate(date: Date) {
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear().toString().slice(-2);
    return `${month}/${year}`;
}

function ResumeItem({ title, description, accessory, url }: { title: string; url: string; description: string; accessory: string }) {
    return (
        <View style={styles.itemContainer}>
            <View style={styles.itemHeader}>
                <Link src={url} style={styles.itemTitle}>
                    {title}
                </Link>
                {accessory && <Text style={styles.itemAccessory}>{accessory}</Text>}
            </View>
            <Text style={styles.itemDescription}>{description}</Text>
        </View>
    );
}

export default function ResumeDocument({ location, email, experience, education }: ResumePage) {
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.header}>
                    <Text style={styles.name}>Víctor Navarro González</Text>
                    <Text style={styles.subtitle}>
                        {location} / {email}
                    </Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Experience</Text>
                    {experience.map(({ jobTitle, projectName, endedOn, currentlyWorking, startedOn, technologies, jobDescription, projectUrl }) => (
                        <ResumeItem
                            key={jobTitle + projectName}
                            title={`${jobTitle} - ${projectName}`}
                            url={projectUrl}
                            description={`${jobDescription} (${technologies.join(", ")})`}
                            accessory={
                                currentlyWorking || !endedOn
                                    ? `${formatDate(new Date(startedOn))} - ${formatDate(new Date())}`
                                    : `${formatDate(new Date(startedOn))} - ${formatDate(new Date(endedOn))}`
                            }
                        />
                    ))}
                </View>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Education</Text>
                    {education.map(({ endedOn, startedOn, title, school, description }) => (
                        <ResumeItem
                            key={title}
                            title={`${title} - ${school.name}`}
                            url={school.url}
                            description={description}
                            accessory={`${formatDate(new Date(startedOn))} - ${formatDate(new Date(endedOn))}`}
                        />
                    ))}
                </View>
            </Page>
        </Document>
    );
}
