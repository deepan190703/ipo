from django.db import models

class IPO(models.Model):
    company_name = models.CharField(max_length=100)
    price_band = models.CharField(max_length=50)
    open_date = models.DateField()
    close_date = models.DateField()
    issue_size = models.IntegerField()
    issue_type = models.CharField(max_length=50)
    listing_date = models.DateField()
    status = models.CharField(max_length=50)
    ipo_price = models.DecimalField(max_digits=10, decimal_places=2)
    listing_price = models.DecimalField(max_digits=10, decimal_places=2)
    current_market_price = models.DecimalField(max_digits=10, decimal_places=2)
    current_return = models.DecimalField(max_digits=5, decimal_places=2)
    rhp_pdf = models.FileField(upload_to='pdfs/')
    drhp_pdf = models.FileField(upload_to='pdfs/')
