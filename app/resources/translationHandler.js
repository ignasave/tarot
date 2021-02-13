import translations from './translations';

const getLanguaje = () => 'es';

const objectMap = (obj, fn) =>
  Object.fromEntries(
    Object.entries(obj).map(
      ([k, v], i) => [k, fn(v, k, i)]
    )
  )

export const getTranslationSection = (section, withGeneralTranslations) => {

	const lang = getLanguaje();
    let sectionObject = translations[section];
    if(withGeneralTranslations){
        sectionObject = Object.assign(sectionObject, translations['generalTranslations'])
    }
    let translationObject = {}
	if (sectionObject) {
        translationObject = objectMap(sectionObject, tr => tr[lang])
	}
	return translationObject
};
