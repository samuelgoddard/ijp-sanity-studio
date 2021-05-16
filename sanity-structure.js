import S from "@sanity/desk-tool/structure-builder";

const hiddenDocTypes = listItem => ![
  "home",
  "media.tag"
].includes(listItem.getId())

export default () =>
  S.list()
    .title("Content")
    .items([
        S.listItem()
            .title("Home Page")
            .child(
                S.editor()
                    .id('home')
                    .schemaType("home")
                    .documentId("singleton-home")
            ),
      ...S.documentTypeListItems()
        .filter(hiddenDocTypes)
    ]);