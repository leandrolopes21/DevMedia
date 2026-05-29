use solpen_bbk
select	
		e.cod_filial_cont_estoqu,
		a.Produto,
		a.acabamento,
		sum(a.Qtde_a_produzir_req-a.Qtde_ja_requisitada) as 'Empenho OPs',
		sum(a.qtd_empenho) as 'PP545',
		c.Qtd_Est_Empenhado as 'Empenho GN060E'

			from		E001_PP545	as a 
			inner join	E001_PP545	as b 				on a.Filial=b.Filial and a.Nro_OP=b.Nro_OP and 1=b.Seq_OP
			inner join	E001_GN060	as d				on a.Produto=d.Produto
			inner join  E001_GN001  as e				on a.filial=e.filial
			inner join	E001_GN060E as c				on e.cod_filial_cont_estoqu=c.Filial and a.Produto=c.Produto and a.Acabamento=c.Acabamento
			
			where	a.Tipo_seq<>'O' and a.Situacao<>'C' and a.Situacao<>'P' and 
					a.Sit_para_estoque<>'B' and
					b.Situacao between 'E' and 'L' 
			
			group by e.cod_filial_cont_estoqu, a.Produto, a.acabamento, c.Qtd_Est_Empenhado
			having -- sum(a.Qtde_a_produzir_req-a.Qtde_ja_requisitada)<>sum(a.qtd_empenho) or
			abs(sum(a.Qtde_a_produzir_req-a.Qtde_ja_requisitada)-(c.Qtd_Est_Empenhado))>0.001
					
			order by a.Produto
