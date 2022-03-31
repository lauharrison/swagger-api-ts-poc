/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface UpdateTemplateRequest {
  name: string;
}

export interface UploadTemplateResponse {
  id?: string;
  name?: string;
  uploadStatus?: "INITIALIZED" | "UPLOADING" | "SUCCEEDED" | "FAILED" | "SCAN_FAILED";
}

export interface StageRequireDocItemRequest {
  brandKey: string;
  stage: string;
  documentType:
    | "SALES_INVOICE"
    | "COMMERCIAL_INVOICE"
    | "PURCHASE_ORDER"
    | "PACKING_LIST"
    | "CERTIFICATE"
    | "ORDER_REPORT"
    | "STYLE_LIST"
    | "COST_SHEET"
    | "BILL_OF_MATERIALS"
    | "BILL_OF_LADING"
    | "RECEIPT"
    | "CONTRACT"
    | "BROKER_INSTRUCTIONS"
    | "BUSINESS_RELATED"
    | "COUNTRY_OF_ORIGIN"
    | "DECLARATION_LETTER"
    | "FACTORY_AFFIDAVITS"
    | "FORWARDER_CARGO_RECEIPT"
    | "FREIGHT_DOCUMENTS"
    | "GOODS_ISSUE"
    | "GOODS_RECEIPT"
    | "LETTER_OF_CREDIT"
    | "ARRIVAL_NOTICE"
    | "ENTRY_SUMMARY_PACKAGE"
    | "FACTORY_PROFILE"
    | "IMPORTER_INFO"
    | "PAYMENT_REPORT"
    | "PAYMENT_VOUCHER"
    | "OTHER";
  tradeParty: "SUPPLIER";

  /** @format int32 */
  requireNumber: number;
}

export interface StageRequireDocumentCreateRequest {
  networkOwnerCompanyId: string;
  items: StageRequireDocItemRequest[];
}

export interface StageRequireDocResponse {
  id?: string;
  networkOwnerCompanyId?: string;
  brandKey?: string;
  stage?: string;
  documentType?:
    | "SALES_INVOICE"
    | "COMMERCIAL_INVOICE"
    | "PURCHASE_ORDER"
    | "PACKING_LIST"
    | "CERTIFICATE"
    | "ORDER_REPORT"
    | "STYLE_LIST"
    | "COST_SHEET"
    | "BILL_OF_MATERIALS"
    | "BILL_OF_LADING"
    | "RECEIPT"
    | "CONTRACT"
    | "BROKER_INSTRUCTIONS"
    | "BUSINESS_RELATED"
    | "COUNTRY_OF_ORIGIN"
    | "DECLARATION_LETTER"
    | "FACTORY_AFFIDAVITS"
    | "FORWARDER_CARGO_RECEIPT"
    | "FREIGHT_DOCUMENTS"
    | "GOODS_ISSUE"
    | "GOODS_RECEIPT"
    | "LETTER_OF_CREDIT"
    | "ARRIVAL_NOTICE"
    | "ENTRY_SUMMARY_PACKAGE"
    | "FACTORY_PROFILE"
    | "IMPORTER_INFO"
    | "PAYMENT_REPORT"
    | "PAYMENT_VOUCHER"
    | "OTHER";
  tradeParty?: "SUPPLIER";

  /** @format int32 */
  requireNumber?: number;
}

export interface CustomizedFields {
  customizedField1?: string;
  customizedField2?: string;
  customizedField3?: string;
  customizedField4?: string;
  customizedField5?: string;
  customizedField6?: string;
  customizedField7?: string;
  customizedField8?: string;
  customizedField9?: string;
  customizedField10?: string;
}

export interface SkuCustomizedFieldsUpdateRequest {
  networkOwnerCompanyId: string;
  customizedFields: CustomizedFields;
}

export interface ProductCustomizedFieldLabelUpdateRequest {
  networkOwnerCompanyId: string;
  customizedFields: CustomizedFields;
}

export interface ProductCategoryRequest {
  id?: string;
  materialManufacturingStageKeys?: string[];
}

export interface ProductCategoryUpdateRequest {
  networkOwnerCompanyId: string;
  productCategories: ProductCategoryRequest[];
}

export interface MaterialResponse {
  id?: string;
  key?: string;
  name?: string;
}

export interface ProductCategoryResponse {
  id?: string;
  networkOwnerCompanyId: string;
  division?: string;
  department?: string;
  subClass?: string;
  category?: string;
  subCategory?: string;
  styleNumber?: string;
  class?: string;
}

export interface ProductCategoryUpdateMappingResponse {
  id?: string;
  productCategory?: ProductCategoryResponse;
  material?: MaterialResponse;
}

export interface MaterialManufacturingStageUpdateRequest {
  networkOwnerCompanyId: string;
  name: string;
  stages: string[];
}

export interface ProductFilterCriteriaRequest {
  styleNumbers?: string[];
  brands?: string[];
  divisions?: string[];
  categories?: string[];
  styleNames?: string[];
  departments?: string[];
  productClasses?: string[];
  productSubClasses?: string[];
  subCategories?: string[];
  upstreamBrands?: string[];
  descriptions?: string[];
  downstreamReferenceNumbers?: string[];
  segments?: string[];
  upstreamReferenceNumbers?: string[];
  statuses?: ("ACTIVE" | "INACTIVE")[];
  customizedFields1?: string[];
  customizedFields2?: string[];
  customizedFields3?: string[];
  customizedFields4?: string[];
  customizedFields5?: string[];
  customizedFields6?: string[];
  customizedFields7?: string[];
  customizedFields8?: string[];
  customizedFields9?: string[];
  customizedFields10?: string[];
}

export interface Pageable {
  /**
   * @format int32
   * @min 0
   */
  page?: number;

  /**
   * @format int32
   * @min 1
   */
  size?: number;
  sort?: string[];
}

export interface PageResultProductRetrievalResponseV2 {
  pageData?: ProductRetrievalResponseV2[];

  /** @format int32 */
  pageNumber?: number;

  /** @format int32 */
  pageSize?: number;

  /** @format int64 */
  totalRows?: number;

  /** @format int64 */
  totalPages?: number;
}

export interface ProductRetrievalResponseV2 {
  id?: string;
  brand?: string;
  upstreamBrands?: string[];
  categoryLevel1?: string;
  categoryLevel5?: string;
  styleNumber?: string;
  styleName?: string;
  categoryLevel2?: string;
  categoryLevel3?: string;
  categoryLevel4?: string;
  categoryLevel6?: string;
  description?: string;
  downstreamReferenceNumber?: string;
  upstreamReferenceNumber?: string;
  segment?: string;
  customisedFields?: Record<string, string>;
  status?: "ACTIVE" | "INACTIVE";
}

export interface StageCreateRequest {
  networkOwnerCompanyId: string;
  stages: Record<string, StageItemRequest[]>;
  inputStagesName?: string[];
}

export interface StageItemRequest {
  name: string;
  description?: string;
}

export interface GlobalManufacturingStage {
  id?: string;
  name?: string;
  description?: string;
}

export interface ManufacturingStage {
  id?: string;
  networkOwnerCompanyId?: string;
  staticStage?: "FINISHED_PRODUCT" | "FINISHING_AND_ASSEMBLY" | "PROCESSING" | "MATERIAL";
  name?: string;
  description?: string;

  /** @format int32 */
  sequence?: number;
  deleted?: boolean;
  displayName?: string;
  globalManufacturingStage?: GlobalManufacturingStage;
}

export interface PageResultProductRetrievalResponse {
  pageData?: ProductRetrievalResponse[];

  /** @format int32 */
  pageNumber?: number;

  /** @format int32 */
  pageSize?: number;

  /** @format int64 */
  totalRows?: number;

  /** @format int64 */
  totalPages?: number;
}

export interface ProductRetrievalResponse {
  id?: string;
  brand?: string;
  upstreamBrands?: string[];
  division?: string;
  category?: string;
  styleNumber?: string;
  styleName?: string;
  department?: string;
  productClass?: string;
  productSubClass?: string;
  subCategory?: string;
  description?: string;
  downstreamReferenceNumber?: string;
  upstreamReferenceNumber?: string;
  segment?: string;
  status?: "ACTIVE" | "INACTIVE";
  customisedFields?: Record<string, string>;
}

export interface ProductCategoryCreateRequest {
  networkOwnerCompanyId: string;
  productCategories: ProductCategoryRequest[];
}

export interface ProductCategoryCreateResponse {
  id?: string;
  networkOwnerCompanyId?: string;
  styleNumber?: string;
}

export interface OrderFinalizedDocumentFilterCriteriaRequest {
  orderNumbers?: string[];
  docIds?: string[];
  docNames?: string[];
  docTypes?: string[];
  companyNames?: string[];
  shipmentNumbers?: string[];
  relatedStyleNames?: string[];
  relatedStyleNumbers?: string[];
  relatedBrands?: string[];
  updaterUsernames?: string[];
  creatorUsernames?: string[];
  manufacturingStages?: string[];
  supplierCompanyNames?: string[];
}

export interface CompanyResponse {
  id?: string;
  name?: string;
}

export interface OrderFinalizedDocumentResponse {
  id?: string;
  orderNumber?: string;
  docId?: string;
  docName?: string;
  docType?:
    | "SALES_INVOICE"
    | "COMMERCIAL_INVOICE"
    | "PURCHASE_ORDER"
    | "PACKING_LIST"
    | "CERTIFICATE"
    | "ORDER_REPORT"
    | "STYLE_LIST"
    | "COST_SHEET"
    | "BILL_OF_MATERIALS"
    | "BILL_OF_LADING"
    | "RECEIPT"
    | "CONTRACT"
    | "BROKER_INSTRUCTIONS"
    | "BUSINESS_RELATED"
    | "COUNTRY_OF_ORIGIN"
    | "DECLARATION_LETTER"
    | "FACTORY_AFFIDAVITS"
    | "FORWARDER_CARGO_RECEIPT"
    | "FREIGHT_DOCUMENTS"
    | "GOODS_ISSUE"
    | "GOODS_RECEIPT"
    | "LETTER_OF_CREDIT"
    | "ARRIVAL_NOTICE"
    | "ENTRY_SUMMARY_PACKAGE"
    | "FACTORY_PROFILE"
    | "IMPORTER_INFO"
    | "PAYMENT_REPORT"
    | "PAYMENT_VOUCHER"
    | "OTHER";
  companyName?: string;
  companyNetworkId?: string;
  orderCompanyNetworkId?: string;
  relatedShipments?: RelatedShipmentResponse[];
  relatedStyleNames?: string[];
  relatedStyleNumbers?: string[];
  relatedBrands?: string[];
  manufacturingStages?: string[];
  updaterUsername?: string;
  creatorUsername?: string;

  /** @format date-time */
  finalizedDate?: string;
  createdBy?: string;
  updatedBy?: string;
  supplierCompanies?: CompanyResponse[];
  rootOrder?: boolean;
}

export interface PageResultOrderFinalizedDocumentResponse {
  pageData?: OrderFinalizedDocumentResponse[];

  /** @format int32 */
  pageNumber?: number;

  /** @format int32 */
  pageSize?: number;

  /** @format int64 */
  totalRows?: number;

  /** @format int64 */
  totalPages?: number;
}

export interface RelatedShipmentResponse {
  id?: string;
  shipmentNumber?: string;
}

export interface LinkageFilterCriteriaRequest {
  orderNumber?: string[];
  shipmentId?: string[];
  customerStyleName?: string[];
  customerStyleNumber?: string[];
  brand?: string[];
  upstreamBrands?: string[];
}

export interface LinkageInfo {
  linkageId?: string;
  orderId?: string;
  orderNumber?: string;
  shipmentId?: string;
  customerStyleNumber?: string;
  customerStyleName?: string;
  brand?: string;
  shipmentDeliveryDate?: string;
  upstreamBrands?: string[];
}

export interface PageResultLinkageInfo {
  pageData?: LinkageInfo[];

  /** @format int32 */
  pageNumber?: number;

  /** @format int32 */
  pageSize?: number;

  /** @format int64 */
  totalRows?: number;

  /** @format int64 */
  totalPages?: number;
}

export interface BrandResponse {
  key?: string;
  name?: string;
}

export interface ShipmentSupplyChainSummaryWithBrandResponse {
  styleNames?: string[];
  styleNumbers?: string[];
  categories?: string[];
  colors?: string[];

  /** @format int32 */
  quantity?: number;
  uom?: string;
  brands?: BrandResponse[];

  /** @format int32 */
  supplierCount?: number;

  /** @format int32 */
  uploadedDocumentCount?: number;

  /** @format int32 */
  missingDocumentCount?: number;

  /** @format int32 */
  waivedDocumentCount?: number;
  cottonOrigin?: string[];
  images?: SimpleFileContentResponse[];
}

export interface SimpleFileContentResponse {
  imageUri?: string;
  content?: string[];
}

export interface WaiveMissingDocWithBrandKeyRequest {
  orderId: string;
  type:
    | "SALES_INVOICE"
    | "COMMERCIAL_INVOICE"
    | "PURCHASE_ORDER"
    | "PACKING_LIST"
    | "CERTIFICATE"
    | "ORDER_REPORT"
    | "STYLE_LIST"
    | "COST_SHEET"
    | "BILL_OF_MATERIALS"
    | "BILL_OF_LADING"
    | "RECEIPT"
    | "CONTRACT"
    | "BROKER_INSTRUCTIONS"
    | "BUSINESS_RELATED"
    | "COUNTRY_OF_ORIGIN"
    | "DECLARATION_LETTER"
    | "FACTORY_AFFIDAVITS"
    | "FORWARDER_CARGO_RECEIPT"
    | "FREIGHT_DOCUMENTS"
    | "GOODS_ISSUE"
    | "GOODS_RECEIPT"
    | "LETTER_OF_CREDIT"
    | "ARRIVAL_NOTICE"
    | "ENTRY_SUMMARY_PACKAGE"
    | "FACTORY_PROFILE"
    | "IMPORTER_INFO"
    | "PAYMENT_REPORT"
    | "PAYMENT_VOUCHER"
    | "OTHER";
  reason: string;
  manufacturingStageId: string;
  brandKey?: string;
}

export interface UploadDocumentRequest {
  id: string;
  name: string;
  hashValue: string;
  orderDocUpload?: boolean;
}

export interface UploadDocumentResponse {
  id?: string;
  name?: string;
  contentUri?: string;
  thumbnailUri?: string;
  uploadStatus?: "INITIALIZED" | "UPLOADING" | "SUCCEEDED" | "FAILED" | "SCAN_FAILED";
  scanResult?: string;
}

export interface CreateSkuCustomizedFieldsRequest {
  networkOwnerCompanyId: string;
  customizedFields: CustomizedFields;
}

export interface ProductStatusBatchUpdateRequest {
  status?: string;
  productIds: string[];
}

export interface BrandWithLogoResponse {
  key?: string;
  name?: string;
  logo?: string[];
}

export interface ProductDetailsResponse {
  id?: string;
  brand?: BrandWithLogoResponse;
  styleNumber?: string;
  styleName?: string;
  colors?: string[];
  images?: SimpleFileContentResponse[];
  skus?: SKUResponse[];
  customisedFields?: Record<string, string>;
  status?: "ACTIVE" | "INACTIVE";
  categoryLevel1?: string;
  categoryLevel2?: string;
  categoryLevel3?: string;
  categoryLevel4?: string;
  categoryLevel5?: string;
  categoryLevel6?: string;
}

export interface SKUResponse {
  id?: string;
  productCodeType?: string;
  productCode?: string;
  color?: string;
  colorCode?: string;
  size?: string;
  imageUri?: string;
  customizedFields?: Record<string, string>;
}

export interface ProductCustomizedFieldLabelCreateRequest {
  networkOwnerCompanyId: string;
  customizedFields: CustomizedFields;
}

export interface BrandInfo {
  rootItemIds?: string[];
  productId?: string;
}

export interface SupplyChainCompanySummaryQueryRequest {
  supplierName: string;
  itemIds: string[];
  supplierId?: string;
  brandInfo?: BrandInfo;
}

export interface ManufacturingStageResponse {
  id?: string;
  networkOwnerCompanyId?: string;
  staticStage?: "FINISHED_PRODUCT" | "FINISHING_AND_ASSEMBLY" | "PROCESSING" | "MATERIAL";
  name?: string;
  description?: string;

  /** @format int32 */
  sequence?: number;
  deleted?: boolean;
  displayName?: string;
}

export interface RelatedItemsResponse {
  id?: string;
  lineItemNumber?: string;
}

export interface RelatedOrderItemResponse {
  id?: string;
  lineItemNumber?: string;
  orderId?: string;
}

export interface RelatedOrderResponse {
  id?: string;
  orderNumber?: string;
  stage?: "GARMENT" | "FABRIC" | "YARN" | "FIBER_COTTON";
  manufacturingStage?: ManufacturingStageResponse;
  items?: RelatedItemsResponse[];
}

export interface SupplyChainCompanySummaryResponse {
  location?: string;
  origins?: string[];

  /** @format int32 */
  uploadedDocumentCount?: number;

  /** @format int32 */
  missingDocumentCount?: number;
  orders?: RelatedOrderResponse[];
  orderItems?: RelatedOrderItemResponse[];

  /** @format int32 */
  waiveMissingDocumentCount?: number;
}

export interface QueryProductSupplyChainByMaterialsRequest {
  productId: string;
  orderIds?: string[];
  orderItemIds?: string[];
  materialIds: string[];
}

export interface Address {
  id?: string;
  country?: string;
}

export interface CompanyInSupplyChainResponse {
  id?: string;
  name?: string;
  seraiId?: string;
  address?: Address;
}

export interface Edge {
  sourceId?: string;
  targetId?: string;
}

export interface GraphDataScNodeResponse {
  nodes?: NodeScNodeResponse[];
  edges?: Edge[];
}

export interface NodeScNodeResponse {
  id?: string;
  content?: ScNodeResponse;
}

export interface ScNodeResponse {
  supplier?: CompanyInSupplyChainResponse;
  manufacturingStage?: ManufacturingStageResponse;

  /** @format int32 */
  column?: number;
  orderIds?: string[];
  itemIds?: string[];

  /** @format int32 */
  requiredDocNumber?: number;

  /** @format int32 */
  missingDocNumber?: number;

  /** @format int32 */
  waivedDocNumber?: number;
  uploadedFinalisedDocIds?: string[];
}

export interface QueryProductSupplyChainRequest {
  productId: string;
  orderIds?: string[];
  orderItemIds?: string[];
}

export interface ProductSupplyChainSummaryResponse {
  /** @format int32 */
  quantity?: number;
  uom?: string;

  /** @format int32 */
  supplierCount?: number;

  /** @format int32 */
  uploadedDocumentCount?: number;

  /** @format int32 */
  missingDocumentCount?: number;

  /** @format int32 */
  waivedDocumentCount?: number;
}

export interface NotificationResultResponse {
  networkOwnerCompanyIdFailList?: string[];
}

export interface MaterialManufacturingStageRequest {
  key: string;
  name: string;
  stages: string[];
  validKey?: boolean;
}

export interface MaterialManufacturingStagesCreateRequest {
  networkOwnerCompanyId: string;
  materialManufacturingStages: MaterialManufacturingStageRequest[];
}

export interface MaterialManufacturingStageResponse {
  networkOwnerCompanyId?: string;
  materialManufacturingStages?: MaterialManufacturingStages[];
}

export interface MaterialManufacturingStages {
  id?: string;
  key?: string;
  name?: string;
  stages?: string[];
}

export interface MigrateStageRequest {
  companyId?: string;
  originalName?: string;
  updatedName?: string;
}

export type StreamingResponseBody = object;

export interface OrderMappedDocsResponse {
  orderId?: string;
  orderItemId?: string;
  documentIds?: string[];
}

export interface ShipmentSupplyChainQueryRequest {
  orderItemIds: string[];
  materialIds: string[];
}

export interface GlobalManufacturingStageCreateRequest {
  /** @pattern ^(?!_)[a-zA-Z_]+$ */
  name: string;
  description: string;
}

export interface GlobalManufacturingStageResponse {
  id?: string;
  name?: string;
  description?: string;
}

export interface FileProcessResultFilterCriteriaRequest {
  ids?: string[];
  sourceFileNames?: string[];
  uploadTypes?: ("SUPPORTING_DOCUMENT" | "PRODUCT_DATA" | "ORDER_DATA" | "LINKAGE" | "ENTITY" | "OTHER")[];
  processStatuses?: string[];
  names?: string[];
}

export interface FileProcessResultResponse {
  id?: string;
  name?: string;

  /** @format date-time */
  createdTime?: string;

  /** @format date-time */
  updatedTime?: string;
  uploadType?: "SUPPORTING_DOCUMENT" | "PRODUCT_DATA" | "ORDER_DATA" | "LINKAGE" | "ENTITY" | "OTHER";
  processStatus?: "IN_PROGRESS" | "FAILED" | "SUCCESS" | "PARTIAL_SUCCESS";
  sourceFileName?: string;
}

export interface PageResultFileProcessResultResponse {
  pageData?: FileProcessResultResponse[];

  /** @format int32 */
  pageNumber?: number;

  /** @format int32 */
  pageSize?: number;

  /** @format int64 */
  totalRows?: number;

  /** @format int64 */
  totalPages?: number;
}

export interface DocumentFilterCriteriaRequest {
  names?: string[];
  updaterUsernames?: string[];
}

export interface PageResultPendingDocumentResponse {
  pageData?: PendingDocumentResponse[];

  /** @format int32 */
  pageNumber?: number;

  /** @format int32 */
  pageSize?: number;

  /** @format int64 */
  totalRows?: number;

  /** @format int64 */
  totalPages?: number;
}

export interface PendingDocumentResponse {
  id?: string;
  name?: string;

  /** @format date-time */
  createdTime?: string;

  /** @format date-time */
  updatedTime?: string;
  updaterUsername?: string;
  status?: "INITIALIZED" | "PENDING" | "FINALIZED";
  docType?:
    | "SALES_INVOICE"
    | "COMMERCIAL_INVOICE"
    | "PURCHASE_ORDER"
    | "PACKING_LIST"
    | "CERTIFICATE"
    | "ORDER_REPORT"
    | "STYLE_LIST"
    | "COST_SHEET"
    | "BILL_OF_MATERIALS"
    | "BILL_OF_LADING"
    | "RECEIPT"
    | "CONTRACT"
    | "BROKER_INSTRUCTIONS"
    | "BUSINESS_RELATED"
    | "COUNTRY_OF_ORIGIN"
    | "DECLARATION_LETTER"
    | "FACTORY_AFFIDAVITS"
    | "FORWARDER_CARGO_RECEIPT"
    | "FREIGHT_DOCUMENTS"
    | "GOODS_ISSUE"
    | "GOODS_RECEIPT"
    | "LETTER_OF_CREDIT"
    | "ARRIVAL_NOTICE"
    | "ENTRY_SUMMARY_PACKAGE"
    | "FACTORY_PROFILE"
    | "IMPORTER_INFO"
    | "PAYMENT_REPORT"
    | "PAYMENT_VOUCHER"
    | "OTHER";
  companyNetworkId?: string;
  customFields?: Record<string, string>;
  contentUri?: string;
  createdBy?: string;
  updatedBy?: string;
}

export interface StageInsertRequest {
  networkOwnerCompanyId: string;
  staticStage: "FINISHED_PRODUCT" | "FINISHING_AND_ASSEMBLY" | "PROCESSING" | "MATERIAL";

  /**
   * @format int32
   * @min 0
   */
  insertToSequence: number;
  name: string;
  description?: string;
}

export interface StageItem {
  name?: string;
  description?: string;
  globalManufacturingStage?: GlobalManufacturingStage;
}

export interface StageUpdateRequest {
  networkOwnerCompanyId: string;
  description?: string;
}

export interface ProductStatusUpdateRequest {
  status?: string;
}

export interface ProductCategoryLabelRequest {
  networkOwnerCompanyId: string;
  categoryLevel1?: string;
  categoryLevel2?: string;
  categoryLevel3?: string;
  categoryLevel4?: string;
  categoryLevel5?: string;
  categoryLevel6?: string;
}

export interface ProductCategoryLabelResponse {
  id?: string;
  networkOwnerCompanyId?: string;
  classification?:
    | "CATEGORY_LEVEL_1"
    | "CATEGORY_LEVEL_2"
    | "CATEGORY_LEVEL_3"
    | "CATEGORY_LEVEL_4"
    | "CATEGORY_LEVEL_5"
    | "CATEGORY_LEVEL_6";
  name?: string;
}

export interface UpdateNotificationMessageRequest {
  id: string;
  status?: "READ" | "UNREAD";
}

export interface MappedId {
  orderId?: string;
  itemIds: string[];
}

export interface UpdateDocumentRequest {
  id: string;
  docType?:
    | "SALES_INVOICE"
    | "COMMERCIAL_INVOICE"
    | "PURCHASE_ORDER"
    | "PACKING_LIST"
    | "CERTIFICATE"
    | "ORDER_REPORT"
    | "STYLE_LIST"
    | "COST_SHEET"
    | "BILL_OF_MATERIALS"
    | "BILL_OF_LADING"
    | "RECEIPT"
    | "CONTRACT"
    | "BROKER_INSTRUCTIONS"
    | "BUSINESS_RELATED"
    | "COUNTRY_OF_ORIGIN"
    | "DECLARATION_LETTER"
    | "FACTORY_AFFIDAVITS"
    | "FORWARDER_CARGO_RECEIPT"
    | "FREIGHT_DOCUMENTS"
    | "GOODS_ISSUE"
    | "GOODS_RECEIPT"
    | "LETTER_OF_CREDIT"
    | "ARRIVAL_NOTICE"
    | "ENTRY_SUMMARY_PACKAGE"
    | "FACTORY_PROFILE"
    | "IMPORTER_INFO"
    | "PAYMENT_REPORT"
    | "PAYMENT_VOUCHER"
    | "OTHER";
  mappedIds: MappedId[];
  documentFinalized?: boolean;
  mappedOrderIds?: string[];
  mappedItemIds?: string[];
}

export interface GetTradeItemsApiRequest {
  companyNetworkId: string;

  /** @format int32 */
  pageNumber: number;

  /** @format int32 */
  pageSize: number;
  sort: string[];
}

export interface GetTradeItemsApiResponse {
  tradeItems: ProductDTO[];
}

export interface HsCodeDTO {
  hsCode?: string;
  countryCode?: string;
}

export interface ProductDTO {
  id?: string;
  companyNetworkId?: string;
  upc?: string;
  description?: string;
  realDescription?: string;
  category?: string;
  subCategory?: string;
  productClass?: string;
  division?: string;
  unitOfMeasure?: string;
  colors?: string[];
  styleNumber?: string;
  styleName?: string;
  department?: string;
  productSubClass?: string;
  colorCodes?: string[];
  finalProduct?: boolean;
  image?: string;
  customerIdentifier?: string;
  segment?: string;
  granularity?: "PRODUCT" | "STYLE" | "SKU";
  tradeItemType?: "TRADEITEM" | "CLOTHING" | "FOOTWEAR" | "KNITFABRIC" | "WOVENFABRIC";
  manufacturingStage?: "FINISHED_PRODUCT" | "FINISHING_AND_ASSEMBLY" | "PROCESSING" | "MATERIAL";
  composition?: Record<string, string>;
  countryOfOrigin?: string;
  hsCode?: HsCodeDTO[];
  tradeItemClassification?: Record<string, string>;
  brand?: string;
  brandKey?: string;
  downstreamReferenceNumber?: string;
  upstreamBrands?: string[];
  upstreamReferenceNumber?: string;
  skus?: StorageKeepingUnitDTO[];
  tradeItemProperty?: Record<string, string>;
  uploaderCompanyId?: string;
}

export interface StorageKeepingUnitDTO {
  productCodeType?: string;
  productCode?: string;
  color?: string;
  colorCode?: string;
  size?: string;
  imageUri?: string;
  image?: string;
  adhocProperties?: Record<string, string>;
}

export interface GetTradeItemApiRequest {
  companyNetworkId: string;
  tradeItemIdentifier: "SERAI" | "CUSTOM";
}

export interface SkuCustomizedFieldResponse {
  customizedField1?: string;
  customizedField2?: string;
  customizedField3?: string;
  customizedField4?: string;
  customizedField5?: string;
  customizedField6?: string;
  customizedField7?: string;
  customizedField8?: string;
  customizedField9?: string;
  customizedField10?: string;
}

export interface ProductCategoryLabelMapping {
  categoryLevel1?: string;
  categoryLevel2?: string;
  categoryLevel3?: string;
  categoryLevel4?: string;
  categoryLevel5?: string;
  categoryLevel6?: string;
}

export interface TemplateMetadataResponse {
  id?: string;
  name?: string;
  ownerCompanyNetworkId?: string;
  type?:
    | "OWNER_ORDER_TEMPLATE"
    | "SUPPLIER_ORDER_TEMPLATE"
    | "OWNER_PRODUCT_TEMPLATE"
    | "MANUFACTURING_STAGE_TEMPLATE"
    | "CONTRIBUTOR_TEMPLATE"
    | "NETWORK_OWNER_BRAND_TEMPLATE"
    | "PARTNER_TEMPLATE"
    | "NETWORK_ENTITY_TEMPLATE"
    | "TRANSACTION_AND_MAPPING_TEMPLATE";
  bucket?: string;
  path?: string;
  uploadStatus?: "INITIALIZED" | "UPLOADING" | "SUCCEEDED" | "FAILED" | "SCAN_FAILED";
  createdBy?: string;
  updatedBy?: string;

  /** @format date-time */
  createdTime?: string;

  /** @format date-time */
  updatedTime?: string;
}

export interface ProductSummaryResponse {
  /** @format int32 */
  shipmentCount?: number;

  /** @format int32 */
  supplierCount?: number;

  /** @format int32 */
  uploadedDocumentCount?: number;
  cottonOrigin?: string[];
}

export interface ProductCustomizedFieldResponse {
  customizedField1?: string;
  customizedField2?: string;
  customizedField3?: string;
  customizedField4?: string;
  customizedField5?: string;
  customizedField6?: string;
  customizedField7?: string;
  customizedField8?: string;
  customizedField9?: string;
  customizedField10?: string;
}

export interface OrderListNodeResponse {
  type?: "ORDER" | "ORDER_ITEM";
  id?: string;
  label?: string;
  subNodes?: OrderListNodeResponse[];
}

export interface DocumentResponse {
  id?: string;
  name?: string;
  docType?:
    | "SALES_INVOICE"
    | "COMMERCIAL_INVOICE"
    | "PURCHASE_ORDER"
    | "PACKING_LIST"
    | "CERTIFICATE"
    | "ORDER_REPORT"
    | "STYLE_LIST"
    | "COST_SHEET"
    | "BILL_OF_MATERIALS"
    | "BILL_OF_LADING"
    | "RECEIPT"
    | "CONTRACT"
    | "BROKER_INSTRUCTIONS"
    | "BUSINESS_RELATED"
    | "COUNTRY_OF_ORIGIN"
    | "DECLARATION_LETTER"
    | "FACTORY_AFFIDAVITS"
    | "FORWARDER_CARGO_RECEIPT"
    | "FREIGHT_DOCUMENTS"
    | "GOODS_ISSUE"
    | "GOODS_RECEIPT"
    | "LETTER_OF_CREDIT"
    | "ARRIVAL_NOTICE"
    | "ENTRY_SUMMARY_PACKAGE"
    | "FACTORY_PROFILE"
    | "IMPORTER_INFO"
    | "PAYMENT_REPORT"
    | "PAYMENT_VOUCHER"
    | "OTHER";
  contentUri?: string;
  thumbnailUri?: string;

  /** @format date-time */
  createdTime?: string;

  /** @format date-time */
  updatedTime?: string;
}

export interface DocumentSummaryResponse {
  documents?: DocumentResponse[];
  missingDocuments?: Record<string, number>;
  waiveMissingDocuments?: Record<string, number>;

  /** @format int32 */
  uploadDocumentAmount?: number;

  /** @format int32 */
  missingDocumentAmount?: number;
}

export interface Company {
  id?: string;
  name?: string;
  seraiId?: string;
  address?: Address;
  localEntityName?: string;
  internationalEntityName?: string;
  nameToDisplay?: string;
}

export interface MissingDocResponse {
  orderId?: string;
  orderNumber?: string;
  brand?: string;
  brandKey?: string;
  docType?:
    | "SALES_INVOICE"
    | "COMMERCIAL_INVOICE"
    | "PURCHASE_ORDER"
    | "PACKING_LIST"
    | "CERTIFICATE"
    | "ORDER_REPORT"
    | "STYLE_LIST"
    | "COST_SHEET"
    | "BILL_OF_MATERIALS"
    | "BILL_OF_LADING"
    | "RECEIPT"
    | "CONTRACT"
    | "BROKER_INSTRUCTIONS"
    | "BUSINESS_RELATED"
    | "COUNTRY_OF_ORIGIN"
    | "DECLARATION_LETTER"
    | "FACTORY_AFFIDAVITS"
    | "FORWARDER_CARGO_RECEIPT"
    | "FREIGHT_DOCUMENTS"
    | "GOODS_ISSUE"
    | "GOODS_RECEIPT"
    | "LETTER_OF_CREDIT"
    | "ARRIVAL_NOTICE"
    | "ENTRY_SUMMARY_PACKAGE"
    | "FACTORY_PROFILE"
    | "IMPORTER_INFO"
    | "PAYMENT_REPORT"
    | "PAYMENT_VOUCHER"
    | "OTHER";

  /** @format int32 */
  count?: number;
  supplier?: Company;
  manufacturingStage?: string;
  manufacturingStageId?: string;
  waiveMissingDocResponse?: WaiveMissingDocResponse;
}

export interface WaiveMissingDocResponse {
  waiveReason?: string;
  updatedBy?: string;
  updaterUsername?: string;
  updaterCompanyName?: string;

  /** @format date-time */
  updatedTime?: string;
}

export interface NotificationMessageRetrievalResponse {
  id?: string;
  title?: string;
  messageType?:
    | "MISSING_DOCUMENT"
    | "DOCUMENT_SUMMARY"
    | "MISSING_SUPPLIER"
    | "MISSING_ORDER"
    | "FINISH_PROCESSING_FILE"
    | "CONNECTION_REQUEST"
    | "CONNECTION_RESPONSE";
  content?: string;
  metaData?: Record<string, object>;
  status?: "READ" | "UNREAD";

  /** @format date-time */
  createdTime?: string;
}

export interface PageResultNotificationMessageRetrievalResponse {
  pageData?: NotificationMessageRetrievalResponse[];

  /** @format int32 */
  pageNumber?: number;

  /** @format int32 */
  pageSize?: number;

  /** @format int64 */
  totalRows?: number;

  /** @format int64 */
  totalPages?: number;
}

export interface LinkageResponse {
  id?: string;
  shipmentId?: string;
  deliveryDate?: string;
  orders?: OrderLinkageResponse[];
}

export interface OrderItemResponse {
  id?: string;
  styleNumber?: string;
  styleName?: string;
}

export interface OrderLinkageResponse {
  orderId?: string;
  orderNumber?: string;
  items?: OrderItemResponse[];
}

export interface DpoLevelOrderNode {
  orderId?: string;
  orderNumber?: string;
  manufacturingStage?: ManufacturingStageResponse;
  orders?: OrderTreeNode[];
  documents?: DocumentResponse[];
}

export interface Item {
  id?: string;
  lineItemNumber?: string;
  manufacturingStage?: ManufacturingStageResponse;
  documents?: DocumentResponse[];
}

export interface OrderDocumentTreeResponse {
  orderNumber?: string;

  /** @format int32 */
  uploadedDocuments?: number;
  orders?: DpoLevelOrderNode[];
}

export interface OrderTreeNode {
  orderId?: string;
  orderNumber?: string;
  manufacturingStage?: ManufacturingStageResponse;
  items?: Item[];
  documents?: DocumentResponse[];

  /** @format int32 */
  uploadedDocuments?: number;
}

export interface DocumentRelatedOrderResponse {
  id?: string;
  orderNumber?: string;
  manufacturingStage?: string;
  items?: RelatedItemsResponse[];
  buyerName?: string;
  buyerId?: string;
}

export interface RelatedOrdersResponse {
  myCompanyOrders?: DocumentRelatedOrderResponse[];
  upstreamOrders?: DocumentRelatedOrderResponse[];
  downstreamOrders?: DocumentRelatedOrderResponse[];
}

export interface FileNameParseResponse {
  docType?: string;
  orderOptions?: OrderOptionResponse[];
  error?: string;
}

export interface OrderOptionResponse {
  entityId?: string;
  label?: string;
  order?: string;
  stageName?: string;
  orderType?: "ORDER" | "ORDER_ITEM";
}

export interface FieldResponse {
  fieldName?:
    | "PO"
    | "LINE_ITEM"
    | "PURCHASE_DATE"
    | "INVOICE"
    | "ISSUED_DATE"
    | "GAP_STYLE"
    | "RELATED_COMMERCIAL_INVOICE"
    | "RELATED_PO"
    | "STYLE"
    | "RELATED_SALES_INVOICE"
    | "RELATED_RAW_MATERIAL_PURCHASE_ORDER";
  required?: boolean;
  type?: "INPUT" | "DATE_PICKER" | "DROPDOWN";
  options?: string[];
}

export interface FieldsResponse {
  docType?:
    | "SALES_INVOICE"
    | "COMMERCIAL_INVOICE"
    | "PURCHASE_ORDER"
    | "PACKING_LIST"
    | "CERTIFICATE"
    | "ORDER_REPORT"
    | "STYLE_LIST"
    | "COST_SHEET"
    | "BILL_OF_MATERIALS"
    | "BILL_OF_LADING"
    | "RECEIPT"
    | "CONTRACT"
    | "BROKER_INSTRUCTIONS"
    | "BUSINESS_RELATED"
    | "COUNTRY_OF_ORIGIN"
    | "DECLARATION_LETTER"
    | "FACTORY_AFFIDAVITS"
    | "FORWARDER_CARGO_RECEIPT"
    | "FREIGHT_DOCUMENTS"
    | "GOODS_ISSUE"
    | "GOODS_RECEIPT"
    | "LETTER_OF_CREDIT"
    | "ARRIVAL_NOTICE"
    | "ENTRY_SUMMARY_PACKAGE"
    | "FACTORY_PROFILE"
    | "IMPORTER_INFO"
    | "PAYMENT_REPORT"
    | "PAYMENT_VOUCHER"
    | "OTHER";
  customFields?: FieldResponse[];
}

export interface ArchiveItemResponse {
  id?: string;
  name?: string;

  /** @format int64 */
  size?: number;
}

export interface ArchiveResponse {
  id?: string;
  name?: string;
  expired?: boolean;
  archiveItems?: ArchiveItemResponse[];
}

export interface StageDeleteRequest {
  networkOwnerCompanyId: string;
  stageName: string;
}

export interface TemplateBatchDeleteRequest {
  ownerCompanyNetworkIds: string[];
  name: string;
  type:
    | "OWNER_ORDER_TEMPLATE"
    | "SUPPLIER_ORDER_TEMPLATE"
    | "OWNER_PRODUCT_TEMPLATE"
    | "MANUFACTURING_STAGE_TEMPLATE"
    | "CONTRIBUTOR_TEMPLATE"
    | "NETWORK_OWNER_BRAND_TEMPLATE"
    | "PARTNER_TEMPLATE"
    | "NETWORK_ENTITY_TEMPLATE"
    | "TRANSACTION_AND_MAPPING_TEMPLATE";
}

export interface TemplateBatchDeleteResponse {
  ownerCompanyNetworkId?: string;
  name?: string;
  type?:
    | "OWNER_ORDER_TEMPLATE"
    | "SUPPLIER_ORDER_TEMPLATE"
    | "OWNER_PRODUCT_TEMPLATE"
    | "MANUFACTURING_STAGE_TEMPLATE"
    | "CONTRIBUTOR_TEMPLATE"
    | "NETWORK_OWNER_BRAND_TEMPLATE"
    | "PARTNER_TEMPLATE"
    | "NETWORK_ENTITY_TEMPLATE"
    | "TRANSACTION_AND_MAPPING_TEMPLATE";
  deleted?: boolean;
  gcsFileDeleted?: boolean;
}

export interface SkuCustomizedFieldLabelDeleteRequest {
  networkOwnerCompanyId: string;
  customizedFields: string[];
}

export interface ProductCustomizedFieldLabelDeleteRequest {
  networkOwnerCompanyId: string;
  customizedFields: string[];
}

export interface MaterialManufacturingStagesDeleteRequest {
  networkOwnerCompanyId: string;
}

export interface DocumentBatchDeleteRequest {
  ids?: string[];
}

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, ResponseType } from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({
      ...axiosConfig,
      baseURL: axiosConfig.baseURL || "http://localhost:9000/trace-service",
    });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  private mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.instance.defaults.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  private createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      formData.append(
        key,
        property instanceof Blob
          ? property
          : typeof property === "object" && property !== null
          ? JSON.stringify(property)
          : `${property}`,
      );
      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = (format && this.format) || void 0;

    if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
      requestParams.headers.common = { Accept: "*/*" };
      requestParams.headers.post = {};
      requestParams.headers.put = {};

      body = this.createFormData(body as Record<string, unknown>);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
        ...(requestParams.headers || {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title scs-trace-service
 * @version v1
 * @baseUrl http://localhost:9000/trace-service
 *
 * Generated by Gradle tasks automatically
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  api = {
    /**
     * No description
     *
     * @tags template-resource
     * @name UpdateTemplate
     * @request PUT:/api/v1/templates/{id}
     */
    updateTemplate: (
      id: string,
      data: { file: File; templateDetail: UpdateTemplateRequest },
      params: RequestParams = {},
    ) =>
      this.request<UploadTemplateResponse, any>({
        path: `/api/v1/templates/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags stage-resource
     * @name IdempotentSaveStageRequireDoc
     * @request PUT:/api/v1/stages/require-documents
     */
    idempotentSaveStageRequireDoc: (data: StageRequireDocumentCreateRequest, params: RequestParams = {}) =>
      this.request<StageRequireDocResponse[], any>({
        path: `/api/v1/stages/require-documents`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags sku-resource
     * @name FindSkuCustomizedFieldLabelsByNetworkOwnerCompanyId
     * @request GET:/api/v1/skus/customized-field-labels
     */
    findSkuCustomizedFieldLabelsByNetworkOwnerCompanyId: (
      query: { networkOwnerCompanyId: string },
      params: RequestParams = {},
    ) =>
      this.request<SkuCustomizedFieldResponse, any>({
        path: `/api/v1/skus/customized-field-labels`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags sku-resource
     * @name UpdateSkuCustomizedFieldLabels
     * @request PUT:/api/v1/skus/customized-field-labels
     */
    updateSkuCustomizedFieldLabels: (data: SkuCustomizedFieldsUpdateRequest, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v1/skus/customized-field-labels`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags sku-resource
     * @name CreateSkuCustomizedFieldLabels
     * @request POST:/api/v1/skus/customized-field-labels
     */
    createSkuCustomizedFieldLabels: (data: CreateSkuCustomizedFieldsRequest, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v1/skus/customized-field-labels`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags sku-resource
     * @name DeleteSkuCustomizedFieldLabels
     * @request DELETE:/api/v1/skus/customized-field-labels
     */
    deleteSkuCustomizedFieldLabels: (data: SkuCustomizedFieldLabelDeleteRequest, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v1/skus/customized-field-labels`,
        method: "DELETE",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags product-customized-field-label-resource
     * @name FindAllByNetworkOwnerCompanyId
     * @request GET:/api/v1/product-customized-field-labels
     */
    findAllByNetworkOwnerCompanyId: (query: { networkOwnerCompanyId: string }, params: RequestParams = {}) =>
      this.request<ProductCustomizedFieldResponse, any>({
        path: `/api/v1/product-customized-field-labels`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags product-customized-field-label-resource
     * @name UpdateProductCustomizedFieldLabels
     * @request PUT:/api/v1/product-customized-field-labels
     */
    updateProductCustomizedFieldLabels: (data: ProductCustomizedFieldLabelUpdateRequest, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v1/product-customized-field-labels`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags product-customized-field-label-resource
     * @name CreateProductCustomizedFieldLabels
     * @request POST:/api/v1/product-customized-field-labels
     */
    createProductCustomizedFieldLabels: (data: ProductCustomizedFieldLabelCreateRequest, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v1/product-customized-field-labels`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags product-customized-field-label-resource
     * @name DeleteProductCustomizedFieldLabels
     * @request DELETE:/api/v1/product-customized-field-labels
     */
    deleteProductCustomizedFieldLabels: (data: ProductCustomizedFieldLabelDeleteRequest, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v1/product-customized-field-labels`,
        method: "DELETE",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags product-category-resource
     * @name UpdateProductCategory
     * @request PUT:/api/v1/product-categories
     */
    updateProductCategory: (data: ProductCategoryUpdateRequest, params: RequestParams = {}) =>
      this.request<ProductCategoryUpdateMappingResponse[], any>({
        path: `/api/v1/product-categories`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags product-category-resource
     * @name CreateProductCategory1
     * @request POST:/api/v1/product-categories
     */
    createProductCategory1: (data: ProductCategoryCreateRequest, params: RequestParams = {}) =>
      this.request<ProductCategoryCreateResponse[], any>({
        path: `/api/v1/product-categories`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags material-manufacturing-stage-resource
     * @name UpdateMaterialManufacturingStage
     * @request PUT:/api/v1/material-manufacturing-stages/{materialKey}
     */
    updateMaterialManufacturingStage: (
      materialKey: string,
      data: MaterialManufacturingStageUpdateRequest,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/api/v1/material-manufacturing-stages/${materialKey}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags document-resource
     * @name BatchCancelUpload
     * @request PUT:/api/v1/documents/cancellation
     */
    batchCancelUpload: (data: string[], params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v1/documents/cancellation`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags product-resource-v-3
     * @name FindProducts
     * @request POST:/api/v3/products
     */
    findProducts: (
      data: { productFilterCriteriaRequest?: ProductFilterCriteriaRequest; pageable?: Pageable },
      params: RequestParams = {},
    ) =>
      this.request<PageResultProductRetrievalResponseV2, any>({
        path: `/api/v3/products`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags stage-resource-v-2
     * @name SetManufacturingStages
     * @request POST:/api/v2/stages
     */
    setManufacturingStages: (data: StageCreateRequest, params: RequestParams = {}) =>
      this.request<Record<string, ManufacturingStage[]>, any>({
        path: `/api/v2/stages`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags stage-resource-v-2
     * @name DeleteManufacturingStages
     * @request DELETE:/api/v2/stages
     */
    deleteManufacturingStages: (data: StageDeleteRequest, params: RequestParams = {}) =>
      this.request<Record<string, ManufacturingStage[]>, any>({
        path: `/api/v2/stages`,
        method: "DELETE",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags stage-resource-v-2
     * @name InsertManufacturingStage
     * @request PATCH:/api/v2/stages
     */
    insertManufacturingStage: (data: StageInsertRequest, params: RequestParams = {}) =>
      this.request<Record<string, StageItem[]>, any>({
        path: `/api/v2/stages`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags product-resource-v-2
     * @name FindProducts1
     * @request POST:/api/v2/products
     */
    findProducts1: (
      data: { productFilterCriteriaRequest?: ProductFilterCriteriaRequest; pageable?: Pageable },
      params: RequestParams = {},
    ) =>
      this.request<PageResultProductRetrievalResponse, any>({
        path: `/api/v2/products`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags product-category-resource-v-2
     * @name CreateProductCategory
     * @request POST:/api/v2/product-categories
     */
    createProductCategory: (data: ProductCategoryCreateRequest, params: RequestParams = {}) =>
      this.request<ProductCategoryCreateResponse[], any>({
        path: `/api/v2/product-categories`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags order-resource-v-2
     * @name FindFinalizedDocuments
     * @request POST:/api/v2/orders/documents
     */
    findFinalizedDocuments: (
      data: { request?: OrderFinalizedDocumentFilterCriteriaRequest; pageable?: Pageable },
      params: RequestParams = {},
    ) =>
      this.request<PageResultOrderFinalizedDocumentResponse, any>({
        path: `/api/v2/orders/documents`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags linkage-resource-v-2
     * @name FindLinkages
     * @request POST:/api/v2/linkages
     */
    findLinkages: (data: { request?: LinkageFilterCriteriaRequest; pageable?: Pageable }, params: RequestParams = {}) =>
      this.request<PageResultLinkageInfo, any>({
        path: `/api/v2/linkages`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags linkage-v-2-resource
     * @name QueryShipmentSupplyChainSummary
     * @request POST:/api/v2/linkages/{linkageId}/supply-chain/summary
     */
    queryShipmentSupplyChainSummary: (linkageId: string, data: string[], params: RequestParams = {}) =>
      this.request<ShipmentSupplyChainSummaryWithBrandResponse, any>({
        path: `/api/v2/linkages/${linkageId}/supply-chain/summary`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags waive-missing-document-resource
     * @name WaiveMissingDocsWithBrandKey
     * @request POST:/api/v1/waive-missing-documents/:waiveMissingDocsWithBrandKey
     */
    waiveMissingDocsWithBrandKey: (
      waiveMissingDocsWithBrandKey: string,
      data: WaiveMissingDocWithBrandKeyRequest[],
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/api/v1/waive-missing-documents/${waiveMissingDocsWithBrandKey}`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags template-resource
     * @name UploadOrderData
     * @request POST:/api/v1/templates/batch
     */
    uploadOrderData: (data: { files: File[]; documentDetails: UploadDocumentRequest[] }, params: RequestParams = {}) =>
      this.request<UploadDocumentResponse[], any>({
        path: `/api/v1/templates/batch`,
        method: "POST",
        body: data,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags template-resource
     * @name BatchDeleteTemplates
     * @request DELETE:/api/v1/templates/batch
     */
    batchDeleteTemplates: (data: TemplateBatchDeleteRequest[], params: RequestParams = {}) =>
      this.request<TemplateBatchDeleteResponse[], any>({
        path: `/api/v1/templates/batch`,
        method: "DELETE",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags stage-resource
     * @name GetManufacturingStages
     * @request GET:/api/v1/stages
     */
    getManufacturingStages: (params: RequestParams = {}) =>
      this.request<ManufacturingStageResponse[], any>({
        path: `/api/v1/stages`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags stage-resource
     * @name SaveManufacturingStages
     * @request POST:/api/v1/stages
     * @deprecated
     */
    saveManufacturingStages: (data: StageCreateRequest, params: RequestParams = {}) =>
      this.request<Record<string, ManufacturingStage[]>, any>({
        path: `/api/v1/stages`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags product-resource
     * @name SaveProductImage
     * @request POST:/api/v1/products/{productId}/images
     */
    saveProductImage: (productId: string, data: { image: File }, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v1/products/${productId}/images`,
        method: "POST",
        body: data,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags product-resource
     * @name UpdateProductStatus
     * @request POST:/api/v1/products/batch
     */
    updateProductStatus: (data: ProductStatusBatchUpdateRequest, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v1/products/batch`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags product-resource
     * @name FindProductByOrderItemIds
     * @request POST:/api/v1/products/:findAllByOrderItemIds
     */
    findProductByOrderItemIds: (findAllByOrderItemIds: string, data: string[], params: RequestParams = {}) =>
      this.request<ProductDetailsResponse[], any>({
        path: `/api/v1/products/${findAllByOrderItemIds}`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags order-resource
     * @name FindRootOrdersByFinalProductId
     * @request GET:/api/v1/orders
     */
    findRootOrdersByFinalProductId: (query: { productId: string }, params: RequestParams = {}) =>
      this.request<OrderListNodeResponse[], any>({
        path: `/api/v1/orders`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags order-resource
     * @name FindScCompanySummary
     * @request POST:/api/v1/orders
     */
    findScCompanySummary: (data: SupplyChainCompanySummaryQueryRequest, params: RequestParams = {}) =>
      this.request<SupplyChainCompanySummaryResponse, any>({
        path: `/api/v1/orders`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags order-resource
     * @name DeleteByIds1
     * @request DELETE:/api/v1/orders
     */
    deleteByIds1: (data: string[], params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v1/orders`,
        method: "DELETE",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags order-resource
     * @name QueryOrderSupplyChainByMaterials
     * @request POST:/api/v1/orders/supply-chain:byMaterials
     */
    queryOrderSupplyChainByMaterials: (
      byMaterials: string,
      data: QueryProductSupplyChainByMaterialsRequest,
      params: RequestParams = {},
    ) =>
      this.request<GraphDataScNodeResponse, any>({
        path: `/api/v1/orders/supply-chain${byMaterials}`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags order-resource
     * @name QueryOrderSupplyChainSummary
     * @request POST:/api/v1/orders/supply-chain/summary
     */
    queryOrderSupplyChainSummary: (data: QueryProductSupplyChainRequest, params: RequestParams = {}) =>
      this.request<ProductSupplyChainSummaryResponse, any>({
        path: `/api/v1/orders/supply-chain/summary`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags notification-message-resource
     * @name BatchCreateMissingSupplierEmailsForSupplier
     * @request POST:/api/v1/notification-messages/missing-supplier-email/supplier
     */
    batchCreateMissingSupplierEmailsForSupplier: (
      query: { frequency: "WEEKLY" | "DAILY" | "ON_DEMAND" },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/api/v1/notification-messages/missing-supplier-email/supplier`,
        method: "POST",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags notification-message-resource
     * @name BatchCreateMissingSupplierEmailsForOwner
     * @request POST:/api/v1/notification-messages/missing-supplier-email/owner
     */
    batchCreateMissingSupplierEmailsForOwner: (
      query: { frequency: "WEEKLY" | "DAILY" | "ON_DEMAND" },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/api/v1/notification-messages/missing-supplier-email/owner`,
        method: "POST",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags notification-message-resource
     * @name BatchCreateMissingSupplierNotificationMessagesForSupplier
     * @request POST:/api/v1/notification-messages/missing-supplier-alert/supplier
     */
    batchCreateMissingSupplierNotificationMessagesForSupplier: (
      query: { frequency: "WEEKLY" | "DAILY" | "ON_DEMAND" },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/api/v1/notification-messages/missing-supplier-alert/supplier`,
        method: "POST",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags notification-message-resource
     * @name BatchCreateMissingSupplierNotificationMessagesForOwner
     * @request POST:/api/v1/notification-messages/missing-supplier-alert/owner
     */
    batchCreateMissingSupplierNotificationMessagesForOwner: (
      query: { frequency: "WEEKLY" | "DAILY" | "ON_DEMAND" },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/api/v1/notification-messages/missing-supplier-alert/owner`,
        method: "POST",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags notification-message-resource
     * @name BatchCreateMissingOrderEmailForSupplier
     * @request POST:/api/v1/notification-messages/missing-order-emails/supplier
     */
    batchCreateMissingOrderEmailForSupplier: (
      query: { frequency: "WEEKLY" | "DAILY" | "ON_DEMAND" },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/api/v1/notification-messages/missing-order-emails/supplier`,
        method: "POST",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags notification-message-resource
     * @name BatchCreateMissingOrderEmailForOwner
     * @request POST:/api/v1/notification-messages/missing-order-emails/owner
     */
    batchCreateMissingOrderEmailForOwner: (
      query: { frequency: "WEEKLY" | "DAILY" | "ON_DEMAND" },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/api/v1/notification-messages/missing-order-emails/owner`,
        method: "POST",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags notification-message-resource
     * @name BatchCreateMissingOrderNotificationMessagesForSupplier
     * @request POST:/api/v1/notification-messages/missing-order-alerts/supplier
     */
    batchCreateMissingOrderNotificationMessagesForSupplier: (
      query: { frequency: "WEEKLY" | "DAILY" | "ON_DEMAND" },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/api/v1/notification-messages/missing-order-alerts/supplier`,
        method: "POST",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags notification-message-resource
     * @name BatchCreateMissingOrderNotificationMessagesForOwner
     * @request POST:/api/v1/notification-messages/missing-order-alerts/owner
     */
    batchCreateMissingOrderNotificationMessagesForOwner: (
      query: { frequency: "WEEKLY" | "DAILY" | "ON_DEMAND" },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/api/v1/notification-messages/missing-order-alerts/owner`,
        method: "POST",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags notification-message-resource
     * @name BatchCreateMissingDocumentEmailsForSupplier
     * @request POST:/api/v1/notification-messages/missing-documents-emails/supplier
     */
    batchCreateMissingDocumentEmailsForSupplier: (
      query: { frequency: "WEEKLY" | "DAILY" | "ON_DEMAND" },
      params: RequestParams = {},
    ) =>
      this.request<NotificationResultResponse, any>({
        path: `/api/v1/notification-messages/missing-documents-emails/supplier`,
        method: "POST",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags notification-message-resource
     * @name BatchCreateMissingDocumentNotificationMessagesForSupplier
     * @request POST:/api/v1/notification-messages/missing-documents-alerts/supplier
     */
    batchCreateMissingDocumentNotificationMessagesForSupplier: (
      query: { frequency: "WEEKLY" | "DAILY" | "ON_DEMAND" },
      params: RequestParams = {},
    ) =>
      this.request<NotificationResultResponse, any>({
        path: `/api/v1/notification-messages/missing-documents-alerts/supplier`,
        method: "POST",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags notification-message-resource
     * @name BatchCreateDocumentSummariesEmails
     * @request POST:/api/v1/notification-messages/document-summaries-emails/owner
     */
    batchCreateDocumentSummariesEmails: (
      query: { frequency: "WEEKLY" | "DAILY" | "ON_DEMAND" },
      params: RequestParams = {},
    ) =>
      this.request<NotificationResultResponse, any>({
        path: `/api/v1/notification-messages/document-summaries-emails/owner`,
        method: "POST",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags notification-message-resource
     * @name BatchCreateDocumentSummariesMessages
     * @request POST:/api/v1/notification-messages/document-summaries-alerts/owner
     */
    batchCreateDocumentSummariesMessages: (
      query: { frequency: "WEEKLY" | "DAILY" | "ON_DEMAND" },
      params: RequestParams = {},
    ) =>
      this.request<NotificationResultResponse, any>({
        path: `/api/v1/notification-messages/document-summaries-alerts/owner`,
        method: "POST",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags material-resource
     * @name FindMaterialsByItemIds
     * @request POST:/api/v1/materials/all:byItems
     */
    findMaterialsByItemIds: (byItems: string, data: string[], params: RequestParams = {}) =>
      this.request<MaterialResponse[], any>({
        path: `/api/v1/materials/all${byItems}`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags material-manufacturing-stage-resource
     * @name SaveMaterialManufacturingStages
     * @request POST:/api/v1/material-manufacturing-stages
     */
    saveMaterialManufacturingStages: (data: MaterialManufacturingStagesCreateRequest, params: RequestParams = {}) =>
      this.request<MaterialManufacturingStageResponse, any>({
        path: `/api/v1/material-manufacturing-stages`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags migration-resource
     * @name UpdateAllManufacturingStageTemplates
     * @request POST:/api/v1/manufacturing-stages/templates/migrate
     * @deprecated
     */
    updateAllManufacturingStageTemplates: (data: string[], params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v1/manufacturing-stages/templates/migrate`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags migration-resource
     * @name MigrateGlobalManufacturingStageToStage
     * @request POST:/api/v1/manufacturing-stages/migrate
     * @deprecated
     */
    migrateGlobalManufacturingStageToStage: (data: MigrateStageRequest[], params: RequestParams = {}) =>
      this.request<MigrateStageRequest[], any>({
        path: `/api/v1/manufacturing-stages/migrate`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags linkage-resource
     * @name DownloadAndSplitFolders
     * @request POST:/api/v1/linkages/{linkageId}/documents
     */
    downloadAndSplitFolders: (linkageId: string, data: string[], params: RequestParams = {}) =>
      this.request<StreamingResponseBody, any>({
        path: `/api/v1/linkages/${linkageId}/documents`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags linkage-resource
     * @name CountDocumentsSize
     * @request POST:/api/v1/linkages/{linkageId}/documents/size
     */
    countDocumentsSize: (linkageId: string, data: string[], params: RequestParams = {}) =>
      this.request<number, any>({
        path: `/api/v1/linkages/${linkageId}/documents/size`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags linkage-resource
     * @name ArchiveDocuments
     * @request POST:/api/v1/linkages/{linkageId}/archives
     */
    archiveDocuments: (linkageId: string, data: string[], params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v1/linkages/${linkageId}/archives`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags linkage-resource
     * @name GetMappedDocs
     * @request POST:/api/v1/linkages/{id}/order-document-mappings
     */
    getMappedDocs: (id: string, data: string[], params: RequestParams = {}) =>
      this.request<OrderMappedDocsResponse[], any>({
        path: `/api/v1/linkages/${id}/order-document-mappings`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags linkage-resource
     * @name QueryShipmentSupplyChain
     * @request POST:/api/v1/linkages/supply-chain:byMaterials
     */
    queryShipmentSupplyChain: (
      byMaterials: string,
      data: ShipmentSupplyChainQueryRequest,
      params: RequestParams = {},
    ) =>
      this.request<GraphDataScNodeResponse, any>({
        path: `/api/v1/linkages/supply-chain${byMaterials}`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags global-manufacturing-stage-resource
     * @name SaveManufacturingStages1
     * @request POST:/api/v1/global-manufacturing-stages
     */
    saveManufacturingStages1: (data: GlobalManufacturingStageCreateRequest[], params: RequestParams = {}) =>
      this.request<GlobalManufacturingStageResponse[], any>({
        path: `/api/v1/global-manufacturing-stages`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags file-process-result-resource
     * @name FindFileProcessResults
     * @request POST:/api/v1/file-process-results
     */
    findFileProcessResults: (
      data: { request?: FileProcessResultFilterCriteriaRequest; pageable?: Pageable },
      params: RequestParams = {},
    ) =>
      this.request<PageResultFileProcessResultResponse, any>({
        path: `/api/v1/file-process-results`,
        method: "POST",
        body: data,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags document-resource
     * @name TriggerBatchUploadData
     * @request POST:/api/v1/documents/trigger-data-pipeline
     */
    triggerBatchUploadData: (
      query: { dataType: "ORDER" | "PRODUCT" | "SUPPORTING_DOCUMENTS" | "ENTITY" },
      data: string[],
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/api/v1/documents/trigger-data-pipeline`,
        method: "POST",
        query: query,
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags document-resource
     * @name PublishRemappingEvents
     * @request POST:/api/v1/documents/remapping-events
     */
    publishRemappingEvents: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v1/documents/remapping-events`,
        method: "POST",
        ...params,
      }),

    /**
     * No description
     *
     * @tags document-resource
     * @name FindPendingDocumentsBy
     * @request POST:/api/v1/documents/pending
     */
    findPendingDocumentsBy: (
      data: { request?: DocumentFilterCriteriaRequest; pageable?: Pageable },
      params: RequestParams = {},
    ) =>
      this.request<PageResultPendingDocumentResponse, any>({
        path: `/api/v1/documents/pending`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags document-resource
     * @name BatchUploadOrderData
     * @request POST:/api/v1/documents/batch
     */
    batchUploadOrderData: (
      data: { files: File[]; documentDetails: UploadDocumentRequest[] },
      params: RequestParams = {},
    ) =>
      this.request<UploadDocumentResponse[], any>({
        path: `/api/v1/documents/batch`,
        method: "POST",
        body: data,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags archive-resource
     * @name ExpireArchives
     * @request POST:/api/v1/archives
     */
    expireArchives: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v1/archives`,
        method: "POST",
        ...params,
      }),

    /**
     * No description
     *
     * @tags stage-resource
     * @name UpdateManufacturingStagesDescription
     * @request PATCH:/api/v1/stages/{name}
     */
    updateManufacturingStagesDescription: (name: string, data: StageUpdateRequest, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v1/stages/${name}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags product-resource
     * @name FindProductById
     * @request GET:/api/v1/products/{productId}
     */
    findProductById: (productId: string, params: RequestParams = {}) =>
      this.request<ProductDetailsResponse, any>({
        path: `/api/v1/products/${productId}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags product-resource
     * @name UpdateProductStatus1
     * @request PATCH:/api/v1/products/{productId}
     */
    updateProductStatus1: (productId: string, data: ProductStatusUpdateRequest, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v1/products/${productId}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags product-resource
     * @name UpdateProductSkuImage
     * @request PATCH:/api/v1/products/sku/{id}/image
     */
    updateProductSkuImage: (id: string, data: { image: File }, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v1/products/sku/${id}/image`,
        method: "PATCH",
        body: data,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags product-category-label-resource
     * @name GetProductCategoryLabelMapping1
     * @request GET:/api/v1/product-category-labels
     */
    getProductCategoryLabelMapping1: (query: { networkOwnerCompanyId: string }, params: RequestParams = {}) =>
      this.request<ProductCategoryLabelMapping, any>({
        path: `/api/v1/product-category-labels`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags product-category-label-resource
     * @name UpdateProductCategory1
     * @request PATCH:/api/v1/product-category-labels
     */
    updateProductCategory1: (data: ProductCategoryLabelRequest, params: RequestParams = {}) =>
      this.request<ProductCategoryLabelResponse[], any>({
        path: `/api/v1/product-category-labels`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags notification-message-resource
     * @name GetNotificationMessages
     * @request GET:/api/v1/notification-messages
     */
    getNotificationMessages: (query: { companyNetworkId?: string; pageable: Pageable }, params: RequestParams = {}) =>
      this.request<PageResultNotificationMessageRetrievalResponse, any>({
        path: `/api/v1/notification-messages`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags notification-message-resource
     * @name UpdateNotificationMessages
     * @request PATCH:/api/v1/notification-messages
     */
    updateNotificationMessages: (data: UpdateNotificationMessageRequest[], params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v1/notification-messages`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags document-resource
     * @name DeleteDocumentsById
     * @request DELETE:/api/v1/documents
     */
    deleteDocumentsById: (data: DocumentBatchDeleteRequest, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v1/documents`,
        method: "DELETE",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags document-resource
     * @name UpdateDocumentAndMappings
     * @request PATCH:/api/v1/documents
     */
    updateDocumentAndMappings: (data: UpdateDocumentRequest[], params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v1/documents`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags product-resource-v-3
     * @name FindFilterOptionsByOptionType
     * @request GET:/api/v3/products/filter-options
     */
    findFilterOptionsByOptionType: (query: { optionType: string }, params: RequestParams = {}) =>
      this.request<string[], any>({
        path: `/api/v3/products/filter-options`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags product-resource-v-3
     * @name FindOwnerProducts
     * @request GET:/api/v3/products/all:getOwnerProducts
     */
    findOwnerProducts: (
      getOwnerProducts: string,
      query: { companyId: string; pageable: Pageable },
      params: RequestParams = {},
    ) =>
      this.request<PageResultProductRetrievalResponseV2, any>({
        path: `/api/v3/products/all${getOwnerProducts}`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags sku-resource-2
     * @name FindSkuCustomizedFieldLabelsForCurrentNetworkOwnerCompany
     * @request GET:/api/v2/skus/customized-field-labels
     */
    findSkuCustomizedFieldLabelsForCurrentNetworkOwnerCompany: (params: RequestParams = {}) =>
      this.request<SkuCustomizedFieldResponse, any>({
        path: `/api/v2/skus/customized-field-labels`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags product-resource-v-2
     * @name FindFilterOptionsByOptionType1
     * @request GET:/api/v2/products/filter-options
     */
    findFilterOptionsByOptionType1: (query: { optionType: string }, params: RequestParams = {}) =>
      this.request<string[], any>({
        path: `/api/v2/products/filter-options`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags product-resource-v-2
     * @name FindOwnerProducts1
     * @request GET:/api/v2/products/all:getOwnerProducts
     */
    findOwnerProducts1: (
      getOwnerProducts: string,
      query: { companyId: string; pageable: Pageable },
      params: RequestParams = {},
    ) =>
      this.request<PageResultProductRetrievalResponse, any>({
        path: `/api/v2/products/all${getOwnerProducts}`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags product-category-label-resource-v-2
     * @name GetProductCategoryLabelMapping
     * @request GET:/api/v2/product-category-labels
     */
    getProductCategoryLabelMapping: (params: RequestParams = {}) =>
      this.request<ProductCategoryLabelMapping, any>({
        path: `/api/v2/product-category-labels`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags linkage-resource-v-2
     * @name FindFilterOptionsByOptionType2
     * @request GET:/api/v2/linkages/filter-options
     */
    findFilterOptionsByOptionType2: (query: { optionType: string }, params: RequestParams = {}) =>
      this.request<string[], any>({
        path: `/api/v2/linkages/filter-options`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags template-resource
     * @name GetTemplatesMetadata
     * @request GET:/api/v1/templates
     */
    getTemplatesMetadata: (params: RequestParams = {}) =>
      this.request<TemplateMetadataResponse[], any>({
        path: `/api/v1/templates`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags stage-resource
     * @name GetManufacturingStages1
     * @request GET:/api/v1/stages/all:byMaterials
     */
    getManufacturingStages1: (byMaterials: string, query: { materialIds: string[] }, params: RequestParams = {}) =>
      this.request<ManufacturingStageResponse[], any>({
        path: `/api/v1/stages/all${byMaterials}`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags product-resource
     * @name FindSummaryProductById
     * @request GET:/api/v1/products/{productId}/summary
     */
    findSummaryProductById: (productId: string, params: RequestParams = {}) =>
      this.request<ProductSummaryResponse, any>({
        path: `/api/v1/products/${productId}/summary`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags product-resource
     * @name FindMaterialStagsByProductId
     * @request GET:/api/v1/products/{productId}/material-stages
     */
    findMaterialStagsByProductId: (productId: string, params: RequestParams = {}) =>
      this.request<MaterialResponse[], any>({
        path: `/api/v1/products/${productId}/material-stages`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags order-resource
     * @name FindDocumentSummaryByItemIdAndCompanyInfo
     * @request GET:/api/v1/orders/order-items/{orderItemId}
     */
    findDocumentSummaryByItemIdAndCompanyInfo: (
      orderItemId: string,
      query: { supplierName: string; supplierId?: string; productId?: string; rootItemIds?: string[] },
      params: RequestParams = {},
    ) =>
      this.request<DocumentSummaryResponse, any>({
        path: `/api/v1/orders/order-items/${orderItemId}`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags order-resource
     * @name GetMappedDocs1
     * @request GET:/api/v1/orders/order-document-mappings
     */
    getMappedDocs1: (
      query: { productId: string; orderIds?: string[]; orderItemIds?: string[] },
      params: RequestParams = {},
    ) =>
      this.request<OrderMappedDocsResponse[], any>({
        path: `/api/v1/orders/order-document-mappings`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags order-resource
     * @name MissingDocuments
     * @request GET:/api/v1/orders/missing-documents
     */
    missingDocuments: (query?: { companyNetworkId?: string }, params: RequestParams = {}) =>
      this.request<MissingDocResponse[], any>({
        path: `/api/v1/orders/missing-documents`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags order-resource
     * @name FindFinalizedDocumentFilterOptionsByOptionType
     * @request GET:/api/v1/orders/documents/filter-options
     */
    findFinalizedDocumentFilterOptionsByOptionType: (query: { optionType: string }, params: RequestParams = {}) =>
      this.request<string[], any>({
        path: `/api/v1/orders/documents/filter-options`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags notification-message-resource
     * @name GetTotalOfUnreadNotificationMessages
     * @request GET:/api/v1/notification-messages/unread
     */
    getTotalOfUnreadNotificationMessages: (params: RequestParams = {}) =>
      this.request<number, any>({
        path: `/api/v1/notification-messages/unread`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags linkage-resource
     * @name FindById
     * @request GET:/api/v1/linkages/{linkageId}
     */
    findById: (linkageId: string, params: RequestParams = {}) =>
      this.request<LinkageResponse, any>({
        path: `/api/v1/linkages/${linkageId}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags file-process-result-resource
     * @name FindFilterOptions
     * @request GET:/api/v1/file-process-results/filter-options
     */
    findFilterOptions: (query: { optionType: string }, params: RequestParams = {}) =>
      this.request<string[], any>({
        path: `/api/v1/file-process-results/filter-options`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags document-resource
     * @name GetOrderDocumentTree1
     * @request GET:/api/v1/documents/tree
     */
    getOrderDocumentTree1: (query: { poId: string; bpoId: string }, params: RequestParams = {}) =>
      this.request<OrderTreeNode | OrderDocumentTreeResponse, any>({
        path: `/api/v1/documents/tree`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags document-resource
     * @name GetStages
     * @request GET:/api/v1/documents/stages
     */
    getStages: (params: RequestParams = {}) =>
      this.request<("GARMENT" | "FABRIC" | "YARN" | "FIBER_COTTON")[], any>({
        path: `/api/v1/documents/stages`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags document-resource
     * @name CountDocumentsSize1
     * @request GET:/api/v1/documents/size
     */
    countDocumentsSize1: (query: { rootOrderId: string }, params: RequestParams = {}) =>
      this.request<number, any>({
        path: `/api/v1/documents/size`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags document-resource
     * @name FindFilterOptions1
     * @request GET:/api/v1/documents/pending/filter-options
     */
    findFilterOptions1: (query: { optionType: string }, params: RequestParams = {}) =>
      this.request<string[], any>({
        path: `/api/v1/documents/pending/filter-options`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags document-resource
     * @name GetRelatedOrders
     * @request GET:/api/v1/documents/orders:related
     */
    getRelatedOrders: (related: string, params: RequestParams = {}) =>
      this.request<RelatedOrdersResponse, any>({
        path: `/api/v1/documents/orders${related}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags document-resource
     * @name GetNamingConventionResults
     * @request GET:/api/v1/documents/naming-convention-results
     */
    getNamingConventionResults: (query: { fileName: string }, params: RequestParams = {}) =>
      this.request<FileNameParseResponse, any>({
        path: `/api/v1/documents/naming-convention-results`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags document-resource
     * @name GetFields
     * @request GET:/api/v1/documents/fields
     */
    getFields: (params: RequestParams = {}) =>
      this.request<FieldsResponse[], any>({
        path: `/api/v1/documents/fields`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags document-resource
     * @name ArchiveDocuments1
     * @request GET:/api/v1/documents/archives
     */
    archiveDocuments1: (query: { rootOrderId: string }, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v1/documents/archives`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags archive-resource
     * @name GetArchive
     * @request GET:/api/v1/archives/{archiveId}
     */
    getArchive: (archiveId: string, params: RequestParams = {}) =>
      this.request<ArchiveResponse, any>({
        path: `/api/v1/archives/${archiveId}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags archive-resource
     * @name DownloadArchiveItem
     * @request GET:/api/v1/archives/{archiveId}/items/{archiveItemId}/media
     */
    downloadArchiveItem: (archiveId: string, archiveItemId: string, params: RequestParams = {}) =>
      this.request<StreamingResponseBody, any>({
        path: `/api/v1/archives/${archiveId}/items/${archiveItemId}/media`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags product-resource
     * @name DeleteByIds
     * @request DELETE:/api/v1/products
     */
    deleteByIds: (data: string[], params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v1/products`,
        method: "DELETE",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags material-manufacturing-stage-resource
     * @name DeleteMaterialManufacturingStageByKey
     * @request DELETE:/api/v1/material-manufacturing-stages/{key}
     */
    deleteMaterialManufacturingStageByKey: (
      key: string,
      data: MaterialManufacturingStagesDeleteRequest,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/api/v1/material-manufacturing-stages/${key}`,
        method: "DELETE",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags linkage-resource
     * @name DeleteLinkagesByIds
     * @request DELETE:/api/v1/linkages
     */
    deleteLinkagesByIds: (data: string[], params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v1/linkages`,
        method: "DELETE",
        body: data,
        type: ContentType.Json,
        ...params,
      }),
  };
  externalApi = {
    /**
     * No description
     *
     * @tags trade-item-controller
     * @name GetTradeItems
     * @request GET:/external-api/v1/trade-items
     */
    getTradeItems: (query: { request: GetTradeItemsApiRequest }, params: RequestParams = {}) =>
      this.request<GetTradeItemsApiResponse, any>({
        path: `/external-api/v1/trade-items`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags trade-item-controller
     * @name Get
     * @request GET:/external-api/v1/trade-items/{id}
     */
    get: (id: string, query: { request: GetTradeItemApiRequest }, params: RequestParams = {}) =>
      this.request<ProductDTO, any>({
        path: `/external-api/v1/trade-items/${id}`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
}
