export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            Hematopath Master - Educational Use Only
          </p>
          <p className="text-center text-sm text-muted-foreground md:text-right">
            Not for clinical diagnosis or patient care
          </p>
        </div>
      </div>
    </footer>
  );
}
