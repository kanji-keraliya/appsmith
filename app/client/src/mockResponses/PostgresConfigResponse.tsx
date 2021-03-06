const PostgresConfigResponse = [
  {
    sectionName: "General",
    id: 1,
    children: [
      {
        label: "Connection Mode",
        configProperty: "datasourceConfiguration.connection.mode",
        controlType: "DROP_DOWN",
        isRequired: true,
        initialValue: "READ_WRITE",
        options: [
          {
            label: "Read Only",
            value: "READ_ONLY",
          },
          {
            label: "Read / Write",
            value: "READ_WRITE",
          },
        ],
      },
    ],
  },
  {
    sectionName: "Connection",
    id: 2,
    children: [
      {
        sectionName: null,
        children: [
          {
            label: "Host Address",
            configProperty: "datasourceConfiguration.endpoints[*].host",
            controlType: "KEYVALUE_ARRAY",
          },
          {
            label: "Port",
            configProperty: "datasourceConfiguration.endpoints[*].port",
            dataType: "NUMBER",
            controlType: "KEYVALUE_ARRAY",
          },
        ],
      },
      {
        label: "Database Name",
        configProperty: "datasourceConfiguration.authentication.databaseName",
        controlType: "INPUT_TEXT",
        placeholderText: "Database name",
        initialValue: "admin",
      },
      {
        sectionName: null,
        children: [
          {
            label: "Username",
            configProperty: "datasourceConfiguration.authentication.username",
            controlType: "INPUT_TEXT",
            placeholderText: "Username",
          },
          {
            label: "Password",
            configProperty: "datasourceConfiguration.authentication.password",
            dataType: "PASSWORD",
            controlType: "INPUT_TEXT",
            placeholderText: "Password",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    sectionName: "SSL (optional)",
    children: [
      {
        label: "SSL Mode",
        configProperty: "datasourceConfiguration.connection.ssl.authType",
        controlType: "DROP_DOWN",
        options: [
          {
            label: "Allow",
            value: "ALLOW",
          },
          {
            label: "Prefer",
            value: "PREFER",
          },
          {
            label: "Require",
            value: "REQUIRE",
          },
          {
            label: "Disable",
            value: "DISABLE",
          },
          {
            label: "Verify-CA",
            value: "VERIFY_CA",
          },
          {
            label: "Verify-Full",
            value: "VERIFY_FULL",
          },
        ],
      },
      {
        sectionName: null,
        children: [
          {
            label: "Key File",
            configProperty: "datasourceConfiguration.connection.ssl.keyFile",
            controlType: "FILE_PICKER",
          },
          {
            label: "Certificate",
            configProperty:
              "datasourceConfiguration.connection.ssl.certificateFile",
            controlType: "FILE_PICKER",
          },
        ],
      },
      {
        sectionName: null,
        children: [
          {
            label: "CA Certificate",
            configProperty:
              "datasourceConfiguration.connection.ssl.caCertificateFile",
            controlType: "FILE_PICKER",
          },
          {
            label: "PEM Certificate",
            configProperty:
              "datasourceConfiguration.connection.ssl.pemCertificate.file",
            controlType: "FILE_PICKER",
          },
          {
            label: "PEM Passphrase",
            configProperty:
              "datasourceConfiguration.connection.ssl.pemCertificate.password",
            dataType: "PASSWORD",
            controlType: "INPUT_TEXT",
            placeholderText: "PEM Passphrase",
          },
        ],
      },
      // {
      //   label: "Enable SSL Compression",
      //   configProperty: "sslCompression",
      //   controlType: "SWITCH",
      // },
    ],
  },
  {
    sectionName: "SSH (optional)",
    id: 4,
    children: [
      {
        label: "Enable SSH",
        configProperty: "enableSSH",
        controlType: "SWITCH",
      },
      {
        sectionName: null,
        children: [
          {
            label: "Tunnel Host",
            configProperty: "datasourceConfiguration.sshProxy.host",
            controlType: "INPUT_TEXT",
            placeholderText: "0.0.0.0",
          },
          {
            label: "Tunnel Port",
            configProperty: "datasourceConfiguration.sshProxy.port",
            controlType: "INPUT_TEXT",
            placeholderText: "8080",
          },
        ],
      },
      {
        label: "Username",
        configProperty: "datasourceConfiguration.sshProxy.username",
        controlType: "INPUT_TEXT",
        placeholderText: "SSH Proxy username",
      },
      {
        label: "Password",
        configProperty: "datasourceConfiguration.sshProxy.password",
        dataType: "PASSWORD",
        controlType: "INPUT_TEXT",
        placeholderText: "SSH Proxy password",
      },
      {
        label: "Authentication Type",
        configProperty: "datasourceConfiguration.sshProxy.authType",
        controlType: "DROP_DOWN",
        options: [
          {
            label: "Password",
            value: "PASSWORD",
          },
          {
            label: "Identity File",
            value: "IDENTITY_FILE",
          },
        ],
      },
    ],
  },
];

export default PostgresConfigResponse;
