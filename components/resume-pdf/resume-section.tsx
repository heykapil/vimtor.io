import { StyleSheet, Text, View } from "@react-pdf/renderer";

interface ResumeSectionProps {
    title: string;
    children: any;
}

const styles = StyleSheet.create({
    section: {
        marginTop: 8,
    },
    title: {
        marginBottom: 8,
        borderBottom: "1px solid black",
        paddingBottom: 6,
    },
});

function ResumeSection({ title, children }: ResumeSectionProps) {
    return (
        <View style={styles.section}>
            <Text style={styles.title}>{title}</Text>
            {children}
        </View>
    );
}

export default ResumeSection;
