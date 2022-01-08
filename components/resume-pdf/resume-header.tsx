import { Text, View, StyleSheet } from "@react-pdf/renderer";

interface ResumeHeaderProps {}

const styles = StyleSheet.create({
    header: {
        marginBottom: 24,
    },
    name: {
        fontSize: 24,
        marginBottom: 12,
    },
    subtitle: {
        fontSize: 16,
    },
});

function ResumeHeader({}: ResumeHeaderProps) {
    return (
        <View style={styles.header}>
            <Text style={styles.name}>Victor Navarro</Text>
            <Text style={styles.subtitle}>22 years | Website | victor@vimtor.io | GitHub</Text>
        </View>
    );
}

export default ResumeHeader;
