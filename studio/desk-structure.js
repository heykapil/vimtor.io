import S from "@sanity/desk-tool/structure-builder";

export default () => {
    return S.list()
        .title("Content")
        .items([
            S.listItem().title("Home Page").showIcon(false).child(S.document().title("Home Page").schemaType("homePage").documentId("homePage")),
            S.listItem()
                .title("Technologies Page")
                .showIcon(false)
                .child(S.document().title("Technologies Page").schemaType("technologiesPage").documentId("technologiesPage")),
            S.listItem()
                .title("Resume Page")
                .showIcon(false)
                .child(S.document().title("Resume Page").schemaType("resumePage").documentId("resumePage")),
            S.divider(),
            S.documentTypeListItem("project").title("Projects").showIcon(false),
            S.documentTypeListItem("technology").title("Technologies").showIcon(false),
        ]);
};
