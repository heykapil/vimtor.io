import { StyleSheet, Text, View } from "@react-pdf/renderer";

interface ResumeSectionItemProps {
    title: string;
    subtitle: string;
    startDate: Date;
    endDate: Date;
    accessoryTitle: string;
}

const styles = StyleSheet.create({
    item: {
        fontSize: 14,
    },
    row: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "baseline",
    },
    title: {
        fontSize: 16,
        fontWeight: "medium",
        marginBottom: 2,
    },
    accessory: {
        color: "#777",
    },
});

function ResumeSectionItem({ title, subtitle, startDate, endDate, accessoryTitle }: ResumeSectionItemProps) {
    return (
        <View style={styles.item}>
            <View style={styles.row}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.accessory}>{accessoryTitle}</Text>
            </View>
            <View style={styles.row}>
                <Text>{subtitle}</Text>
                <Text style={styles.accessory}>{startDate.toLocaleString("default", { month: "long" })}</Text>
            </View>
        </View>
    );
}

export default ResumeSectionItem;
