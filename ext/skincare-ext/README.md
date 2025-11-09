# Skincare Extension (Planned)

This directory is planned for a skincare-specific workerd extension implementation following the pattern demonstrated in the workerd-ext examples.

## Planned Features

Based on the design documentation in [workerd-extensions-skintwin.md](../workerd-extensions-skintwin.md), this extension will include:

### Modules and Structure

- **skincare-brand:salon** - Public API for treatment salons (services)
- **skincare-brand-internal:salon-impl** - Internal salon logic implementation
- **skincare-brand-internal:plant** - Production plant for skincare products
- **skincare-brand-internal:formulations** - Product formulations (moisturizer, serum, etc.)
- **skincare-brand-internal:procedures** - Treatment procedures for each salon
- **skincare-brand:binding** - Binding module for environment initialization

### Configuration

The extension will use:
- `formulations.json` - Product ingredient lists and formulations
- `procedures.json` - Treatment procedures for multiple salons with steps and durations
- Cap'n Proto configuration defining the extension and worker bindings

### Worker Routes

Planned API endpoints:
- `/service` - Request salon services (facial, chemical peel, massage)
- `/product` - Request product formulations
- `/salon/{id}` - Get salon information
- `/formulation/{name}` - Get product formulation details

## Implementation Status

🚧 **Not Yet Implemented** - This directory serves as a placeholder for future skincare-specific extension development.

The supply chain extension in `workerd-ext/` demonstrates the same patterns and can be used as a reference for implementing this skincare extension.

## Comparison with Supply Chain

The skincare extension will follow the same architectural pattern as the supply chain extension but specialized for:
- Multiple treatment salons instead of generic actors
- Product formulations instead of general products
- Treatment procedures instead of services
- Salon-specific capabilities and scheduling

See the [supply chain implementation](../workerd-ext/supply-chain.capnp) for a working example of this pattern.
