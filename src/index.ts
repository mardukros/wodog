/**
 * Generic Supply Chain Implementation for workerd
 * 
 * This module provides a formal specification and implementation for managing
 * supply chain actors, relationships, products, and services in a Cloudflare
 * Workers environment.
 */

// Export actor types and interfaces
export type {
  ActorType,
  CooperativeMembershipLevel,
  CooperativeMembership,
  Capacity,
  PricingRule,
  Actor,
  Supplier,
  Producer,
  Distributor,
  Wholesaler,
  Retailer,
  Marketplace,
  SupplyChainActor,
} from './actors.js';

// Export relationship types and interfaces
export type {
  RelationshipType,
  RelationshipStatus,
  ContractTerms,
  Relationship,
  RelationshipGraph,
} from './relationships.js';

// Export product and service types
export type {
  ProductCategory,
  ProductAttributes,
  Product,
  ServiceType,
  ServiceLevelAgreement,
  Service,
  InventoryItem,
} from './products.js';

// Export configuration and bindings
export type {
  SupplyChainBindings,
  SupplyChainConfig,
  Env,
} from './config.js';

export { defaultConfig } from './config.js';

// Export lookup functionality
export {
  SupplyChainLookup,
} from './lookup.js';

export type {
  ActorQuery,
  ProductQuery,
  RelationshipQuery,
  LookupResult,
} from './lookup.js';

/**
 * Actor sets as defined in the specification:
 * - S = {s₁,…,sₙ} (suppliers)
 * - P = {p₁,…,pₘ} (producers)
 * - D (distributors)
 * - W (wholesalers)
 * - R (retailers)
 * - M (marketplaces)
 */
export interface ActorSets {
  suppliers: Map<string, import('./actors.js').Supplier>;
  producers: Map<string, import('./actors.js').Producer>;
  distributors: Map<string, import('./actors.js').Distributor>;
  wholesalers: Map<string, import('./actors.js').Wholesaler>;
  retailers: Map<string, import('./actors.js').Retailer>;
  marketplaces: Map<string, import('./actors.js').Marketplace>;
}

/**
 * Main SupplyChain class for managing all entities
 */
export class SupplyChain {
  private lookup: import('./lookup.js').SupplyChainLookup;
  private config: import('./config.js').SupplyChainConfig;

  constructor(config?: Partial<import('./config.js').SupplyChainConfig>) {
    this.lookup = new (require('./lookup.js').SupplyChainLookup)();
    this.config = { 
      ...(require('./config.js').defaultConfig), 
      ...config 
    };
  }

  /**
   * Get the lookup service
   */
  getLookup(): import('./lookup.js').SupplyChainLookup {
    return this.lookup;
  }

  /**
   * Get the current configuration
   */
  getConfig(): import('./config.js').SupplyChainConfig {
    return this.config;
  }
}
