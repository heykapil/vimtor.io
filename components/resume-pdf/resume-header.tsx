import { Text, View, StyleSheet } from "@react-pdf/renderer";

interface ResumeHeaderProps {}

const styles = StyleSheet.create({
    header: {
        marginBottom: 24,
        textAlign: "center",
    },
});

function ResumeHeader({}: ResumeHeaderProps) {
    return (
        <View style={styles.header}>
            <Text style={{ fontSize: 24, marginBottom: 12 }}>Victor Navarro</Text>
            <Text style={{ fontSize: 16 }}>22 years | Website | victor@vimtor.io | GitHub</Text>
        </View>
    );
}

export default ResumeHeader;
