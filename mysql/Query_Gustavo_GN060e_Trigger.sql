
use solpen 
DROP TABLE TEMP_GN060E

CREATE TABLE [dbo].[temp_gn060e](
	[seq] [int] IDENTITY(0,1) NOT NULL,
	[produto] [varchar](13) NOT NULL,
	[qtde_estoque_old] [float] NULL,
	[qtde_estoque_new] [float] NULL,
	[qtde_empenho_old] [float] NULL,
	[qtde_empenho_new] [float] NULL,
	[data_ocorr] [datetime] NULL,
	[filial] [int] NULL
) ON [PRIMARY]


CREATE UNIQUE NONCLUSTERED INDEX [temp_gn060e_chv1] ON [dbo].[temp_gn060e] 
(
	[seq] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
GO


CREATE NONCLUSTERED INDEX [temp_gn060e_chv2] ON [dbo].[temp_gn060e] 
(
	[produto] ASC,
	[data_ocorr] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
GO


CREATE TRIGGER empenho
   ON  e001_gn060e
   AFTER UPDATE
AS 
BEGIN
	insert into temp_gn060e (produto, qtde_estoque_old, qtde_estoque_new, qtde_empenho_old, qtde_empenho_new, data_ocorr, filial)
	select a.Produto, b.Qtd_Estoque_Total, a.Qtd_Estoque_Total, b.Qtd_Est_Empenhado, a.Qtd_Est_Empenhado, GETDATE(), a.Filial
	from inserted as a inner join deleted as b 
	on a.Filial=b.Filial and a.Produto=b.Produto and a.Acabamento=b.Acabamento
END
GO
