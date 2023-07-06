import S from "@sanity/desk-tool/structure-builder";
import IframePreview from './preview/IFramePreview'

import { getGlobalSlug, previewURL } from './utils/resolveProductionUrl'

export const getDefaultDocumentNode = ({ schemaType }) => S.document().views(getPreview(schemaType))

const getPreview = (schemaType) => {
  const globalSlug = getGlobalSlug(schemaType)
  if (globalSlug) {
    return [
      S.view.form(),
      S.view
        .component(IframePreview)
        .title('Web preview')
        .options({ previewURL, isMobile: false, globalSlug }),
      S.view
        .component(IframePreview)
        .title('Mobile preview')
        .options({ previewURL, isMobile: true, globalSlug })
    ]
  }
  return [S.view.form()]
}

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem().title('Reel').child(S.editor().id('home').schemaType('home').documentId('singleton-home').views(getPreview('home'))),
      S.divider(),
      S.listItem().title('Info').child(S.editor().id('info').schemaType('info').documentId('singleton-info').views(getPreview('home'))),
      S.divider(),
      S.listItem().title('Contact').child(S.editor().id('contact').schemaType('contact').documentId('singleton-contact').views(getPreview('home'))),
      S.divider(),
      S.listItem().title('Projects').child(S.documentTypeList('project').title('Projects'))
    ]);