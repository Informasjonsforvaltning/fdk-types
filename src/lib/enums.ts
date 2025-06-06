export enum EntityType {
  DATASET = 'DATASET',
  DATA_SERVICE = 'DATA_SERVICE',
  CONCEPT = 'CONCEPT',
  INFORMATION_MODEL = 'INFORMATION_MODEL',
  PUBLIC_SERVICE = 'SERVICE',
  EVENT = 'EVENT'
}

export enum DataFormat {
  JSON = 'application/json',
  CSV = 'text/csv',
  XML = 'application/xml',
  YAML = 'application/x.yaml',
  GEOJSON = 'application/vnd.geo+json',
  HTML = 'text/html',
  SOSI = 'application/x-ogc-sosi',
  XLSX = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  XLS = 'application/vnd.sealed-xls',
  RSS = 'text/xml',
  RDF_XML = 'application/rdf+xml',
  TURTLE = 'text/turtle',
  JSONLD = 'application/ld+json',
  TXT = 'text/plain',
  SIRI = 'application/x.siri',
  UNKNOWN = 'unknown'
}

export enum Filter {
  LASTXDAYS = 'lastXDays',
  OPENDATA = 'opendata',
  ACCESSRIGHTS = 'accessrights',
  PROVENANCE = 'provenance',
  SUBJECTEXISTS = 'subjectExists',
  FORMAT = 'format',
  LOS = 'losTheme',
  ORGPATH = 'orgPath',
  THEME = 'theme',
  Q = 'q',
  PAGE = 'page',
  SORTFIELD = 'sortfield',
  CATALOGNAME = 'catalog_name',
  EVENT_TYPE = 'eventType'
}

export enum MetadataQualityDimension {
  ACCESSIBILITY = 'https://data.norge.no/vocabulary/dcatno-mqa#accessibility',
  FINDABILITY = 'https://data.norge.no/vocabulary/dcatno-mqa#findability',
  INTEROPERABILITY = 'https://data.norge.no/vocabulary/dcatno-mqa#interoperability',
  CONTEXTUALITY = 'https://data.norge.no/vocabulary/dcatno-mqa#contextuality',
  REUSABILITY = 'https://data.norge.no/vocabulary/dcatno-mqa#reusability'
}

export enum MediaTypeOrExtentType {
  MEDIA_TYPE = 'MEDIA_TYPE',
  FILE_TYPE = 'FILE_TYPE',
  UNKNOWN = 'UNKNOWN'
}

export enum MetadataQualityMetric {
  ACCESS_RIGHTS_AVAILABILITY = 'https://data.norge.no/vocabulary/dcatno-mqa#accessRightsAvailability',
  ACCESS_RIGHTS_VOCABULARY_ALIGNMENT = 'https://data.norge.no/vocabulary/dcatno-mqa#accessRightsVocabularyAlignment',
  ACCESS_URL_STATUS_CODE = 'https://data.norge.no/vocabulary/dcatno-mqa#accessUrlStatusCode',
  BYTE_SIZE_AVAILABILITY = 'https://data.norge.no/vocabulary/dcatno-mqa#byteSizeAvailability',
  CATEGORY_AVAILABILITY = 'https://data.norge.no/vocabulary/dcatno-mqa#categoryAvailability',
  CONTACT_POINT_AVAILABILITY = 'https://data.norge.no/vocabulary/dcatno-mqa#contactPointAvailability',
  DATE_ISSUED_AVAILABILITY = 'https://data.norge.no/vocabulary/dcatno-mqa#dateIssuedAvailability',
  DATE_MODIFIED_AVAILABILITY = 'https://data.norge.no/vocabulary/dcatno-mqa#dateModifiedAvailability',
  DCAT_AP_COMPLIANCE = 'https://data.norge.no/vocabulary/dcatno-mqa#dcatApCompliance',
  DOWNLOAD_URL_AVAILABLITY = 'https://data.norge.no/vocabulary/dcatno-mqa#downloadUrlAvailability',
  DOWNLOAD_URL_STATUS_CODE = 'https://data.norge.no/vocabulary/dcatno-mqa#downloadUrlStatusCode',
  FORMAT_AVAILABILITY = 'https://data.norge.no/vocabulary/dcatno-mqa#formatAvailability',
  FORMAT_MATCH = 'https://data.norge.no/vocabulary/dcatno-mqa#formatMatch',
  FORMAT_MEDIA_TYPE_MACHINE_INTERPRETABLE = 'https://data.norge.no/vocabulary/dcatno-mqa#formatMediaTypeMachineInterpretable',
  FORMAT_MEDIA_TYPE_NON_PROPRIETARY = 'https://data.norge.no/vocabulary/dcatno-mqa#formatMediaTypeNonProprietary',
  FORMAT_MEDIA_TYPE_VOCABULARY_ALIGNMENT = 'https://data.norge.no/vocabulary/dcatno-mqa#formatMediaTypeVocabularyAlignment',
  KEYWORD_AVAILABILITY = 'https://data.norge.no/vocabulary/dcatno-mqa#keywordAvailability',
  KNOWN_LICENSE = 'https://data.norge.no/vocabulary/dcatno-mqa#knownLicense',
  LICENSE_AVAILABILITY = 'https://data.norge.no/vocabulary/dcatno-mqa#licenseAvailability',
  MEDIA_TYPE_AVAILABILITY = 'https://data.norge.no/vocabulary/dcatno-mqa#mediaTypeAvailability',
  OPEN_LICENSE = 'https://data.norge.no/vocabulary/dcatno-mqa#openLicense',
  PUBLISHER_AVAILABILITY = 'https://data.norge.no/vocabulary/dcatno-mqa#publisherAvailability',
  RIGHTS_AVAILABILITY = 'https://data.norge.no/vocabulary/dcatno-mqa#rightsAvailability',
  SPATIAL_AVAILABILITY = 'https://data.norge.no/vocabulary/dcatno-mqa#spatialAvailability',
  SYNTAX_VALID = 'https://data.norge.no/vocabulary/dcatno-mqa#syntaxValid',
  TEMPORAL_AVAILABILITY = 'https://data.norge.no/vocabulary/dcatno-mqa#temporalAvailability'
}

export enum AdministrativeUnitType {
  NATION = 'http://rdf.kartverket.no/onto/adm_enhet_4.0.owl#Nasjon',
  COUNTY = 'http://rdf.kartverket.no/onto/adm_enhet_4.0.owl#Fylke',
  MUNICIPALITY = 'http://rdf.kartverket.no/onto/adm_enhet_4.0.owl#Kommune'
}

export enum SpecializedEventType {
  LIFEEVENT = 'life_event',
  BUSINESSEVENT = 'business_event'
}

export enum SpecializedDatasetType {
  DATASET_SERIES = 'datasetSeries'
}

export enum SemanticRelation {
  ASSOSIATIV = 'assosiativ',
  GENERISK = 'generisk',
  PARTITIV = 'partitiv'
}

export enum RelationType {
  OVERORDNET = 'overordnet',
  UNDERORDNET = 'underordnet',
  ER_DEL_AV = 'erDelAv',
  OMFATTER = 'omfatter'
}

export enum SearchObjectRelationType {
  associativeRelation = 'associativeRelation',
  closeMatch = 'closeMatch',
  exactMatch = 'exactMatch',
  generalizes = 'generalizes',
  specializes = 'specializes',
  isReplacedBy = 'isReplacedBy',
  memberOf = 'memberOf',
  replaces = 'replaces',
  seeAlso = 'seeAlso',
  conformsTo = 'conformsTo',
  servesDataset = 'servesDataset',
  inSeries = 'inSeries',
  subject = 'subject',
  hasPart = 'hasPart',
  isPartOf = 'isPartOf',
  isGroupedBy = 'isGroupedBy',
  isClassifiedBy = 'isClassifiedBy',
  isDescribedAt = 'isDescribedAt',
  relation = 'relation',
  hasVersion = 'hasVersion',
  isVersionOf = 'isVersionOf',
  references = 'references',
  isReferencedBy = 'isReferencedBy',
  requires = 'requires',
  isRequiredBy = 'isRequiredBy',
  source = 'source'
}

export enum Vocabulary {
  DATASET = 'http://www.w3.org/ns/dcat#Dataset'
}

export enum AccessRightsCodes {
  PUBLIC = 'PUBLIC',
  NON_PUBLIC = 'NON_PUBLIC',
  RESTRICTED = 'RESTRICTED',
}

export enum LanguageCodes {
  nb = 'nb',
  nn = 'nn',
  en = 'en',
  no = 'no',
  none = ''
}
