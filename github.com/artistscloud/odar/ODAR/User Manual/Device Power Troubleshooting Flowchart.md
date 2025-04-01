flowchart TD
    A[Device won't power on] --> B{Check battery}
    B -->|Low/Dead| C[Connect charger]
    B -->|OK| D{Check power button}
    C --> E[Wait 10 min]
    E --> F{Try power on}
    F -->|Success| Z[Device operational]
    F -->|Fails| G[Contact support]
    D -->|Stuck| H[Press 10s reset]
    D -->|OK| I{Check display}
    H --> I
    I -->|Blank| J[Check connections]
    I -->|OK| Z
    J -->|Loose| K[Secure cables]
    J -->|OK| G
    K --> F

    subgraph "Power System Diagnosis"
    A
    B
    C
    D
    end

    subgraph "Display System"
    I
    J
    K
    end