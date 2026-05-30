#!/usr/bin/env python3
"""
Video Unit Economics Calculator for Shopping Shorts SaaS

계산식: 영상 1편 순이익 = 광고수익 + 제휴수익 + 협찬료
- 광고수익 = RPM × (조회수 / 1000)
- 제휴수익 = Σ(클릭 → 구매 수 × 객단가 × 수수료율)
- 협찬료 = 고정료 또는 가변료

출력: 영상 1편 순이익 | 월 순이익 추정 | 목표 역산 (10M won/month)
"""

import json
from dataclasses import dataclass
from typing import Dict, List, Tuple

# ============================================================================
# 📊 설정: 모든 입력값을 여기서 편집 가능
# ============================================================================

@dataclass
class VideoEconomicsConfig:
    """영상 경제 계산 설정"""

    # ─────────────────────────────────────────────────────────────────────
    # [SECTION 1] 광고 수익 (가정값: YouTube Shorts 한국 기준)
    # ─────────────────────────────────────────────────────────────────────
    ad_rpm: float = 0.75  # USD/1000 views (가정: 한국 쇼츠 평균. 실제: 0.5-1.5 범위)
    ad_rpm_to_krw: float = 1300.0  # USD → KRW conversion (2026-05 기준)

    # ─────────────────────────────────────────────────────────────────────
    # [SECTION 2] 제휴 수익 (Coupang Partners 기준)
    # ─────────────────────────────────────────────────────────────────────
    affiliate_commission_rate: float = 0.03  # 3% (식품: 저수수료. 가정값)
    affiliate_payment_delay_days: Tuple[int, int] = (60, 120)  # 지급 대기 기간

    # 제휴 상품 포트폴리오 (현재 채널 기준)
    # 상품명: (클릭→구매 전환율 %, 객단가 KRW, 월 클릭/영상당)
    affiliate_products: Dict[str, Tuple[float, float, float]] = None

    # ─────────────────────────────────────────────────────────────────────
    # [SECTION 3] 협찬 수익
    # ─────────────────────────────────────────────────────────────────────
    sponsorship_per_video: float = 0.0  # KRW (현재: 없음)

    # ─────────────────────────────────────────────────────────────────────
    # [SECTION 4] 조회수 & 발행 데이터 (실측값)
    # ─────────────────────────────────────────────────────────────────────
    views_per_video: float = 1500.0  # 영상당 평균 조회수 (실측: 1,100~2,200, 현재 avg ~1,500)
    videos_per_month: float = 1.3  # 월 발행 빈도 (9개/28일 기준)

    def __post_init__(self):
        """기본 제휴 상품 포트폴리오 초기화"""
        if self.affiliate_products is None:
            # (전환율%, 객단가, 영상당클릭수)
            # 가정: 1,500 views × 2% CTR ≈ 30 클릭, 3개 상품에 분산
            self.affiliate_products = {
                "곤약즉석밥_54k": (4.0, 54000, 10.0),        # 인기도 높음, 4% 전환율
                "저칼로리간식세트_35k": (3.0, 35000, 8.0),   # 중간 인기
                "다이어트간식_18k": (5.0, 18000, 12.0),     # 높은 관심도, 5% 전환율
            }


def calculate_per_video_profit(config: VideoEconomicsConfig) -> Tuple[float, Dict, float, float]:
    """
    영상 1편의 순이익과 상세 내역을 계산 (재귀 없이)

    Returns:
        Tuple of (per_video_profit, affiliate_details, ad_revenue_krw, affiliate_revenue)
    """
    # =========================================================================
    # 1️⃣ 광고 수익 계산
    # =========================================================================
    ad_revenue_usd = config.ad_rpm * (config.views_per_video / 1000)
    ad_revenue_krw = ad_revenue_usd * config.ad_rpm_to_krw

    # =========================================================================
    # 2️⃣ 제휴 수익 계산
    # =========================================================================
    affiliate_revenue = 0.0
    affiliate_details = {}

    for product_name, (conversion_rate_pct, unit_price, clicks_per_video) in config.affiliate_products.items():
        conversions = clicks_per_video * (conversion_rate_pct / 100)
        revenue = conversions * unit_price * config.affiliate_commission_rate
        affiliate_details[product_name] = {
            "conversion_rate_pct": conversion_rate_pct,
            "unit_price": unit_price,
            "clicks_per_video": clicks_per_video,
            "conversions": round(conversions, 3),
            "revenue": round(revenue, 0),
        }
        affiliate_revenue += revenue

    # =========================================================================
    # 3️⃣ 협찬 수익
    # =========================================================================
    sponsorship_revenue = config.sponsorship_per_video

    # =========================================================================
    # 4️⃣ 합계: 영상 1편 순이익
    # =========================================================================
    per_video_profit = ad_revenue_krw + affiliate_revenue + sponsorship_revenue

    return per_video_profit, affiliate_details, ad_revenue_krw, affiliate_revenue


def calculate_video_economics(config: VideoEconomicsConfig) -> Dict:
    """
    영상 1편의 경제성을 계산하고 상세 내역 반환

    Returns:
        Dict with keys:
        - per_video_profit: 영상 1편 순이익 (KRW)
            - ad_revenue: 광고 수익
            - affiliate_revenue: 제휴 수익
            - sponsorship_revenue: 협찬 수익
            - total: 합계
        - monthly_estimate: 월 순이익 추정
        - reverse_engineering: 목표 달성 시나리오
    """

    per_video_profit, affiliate_details, ad_revenue_krw, affiliate_revenue = calculate_per_video_profit(config)
    sponsorship_revenue = config.sponsorship_per_video

    # =========================================================================
    # 5️⃣ 월 순이익 추정 (현재 발행 빈도 기준)
    # =========================================================================
    monthly_profit = per_video_profit * config.videos_per_month

    # =========================================================================
    # 6️⃣ 목표 역산: 월 10,000,000 KRW 도달
    # =========================================================================
    target_monthly_profit = 10_000_000  # 10M KRW

    reverse_engineering = calculate_reverse_targets(
        config=config,
        per_video_profit=per_video_profit,
        target=target_monthly_profit,
    )

    # =========================================================================
    # 7️⃣ 민감도 분석: 각 레버가 결과에 미치는 영향
    # =========================================================================
    sensitivity = analyze_sensitivity(config, per_video_profit)

    return {
        "per_video_profit": {
            "ad_revenue": round(ad_revenue_krw, 0),
            "affiliate_revenue": round(affiliate_revenue, 0),
            "affiliate_details": affiliate_details,
            "sponsorship_revenue": round(sponsorship_revenue, 0),
            "total": round(per_video_profit, 0),
        },
        "monthly_estimate": {
            "videos_per_month": config.videos_per_month,
            "per_video_profit": round(per_video_profit, 0),
            "monthly_profit": round(monthly_profit, 0),
        },
        "reverse_engineering": reverse_engineering,
        "sensitivity": sensitivity,
    }


def calculate_reverse_targets(config: VideoEconomicsConfig, per_video_profit: float, target: float) -> Dict:
    """
    목표 달성에 필요한 변수값 역산

    3가지 시나리오:
    (a) 전환율 증대: 다른 변수 고정, 제휴 전환율 몇 % 필요?
    (b) 조회수 증대: 다른 변수 고정, 영상당 몇 view 필요?
    (c) 발행 횟수: 다른 변수 고정, 월 몇 편 필요?
    """

    current_monthly = per_video_profit * config.videos_per_month
    gap = target - current_monthly

    result = {
        "target_monthly_krw": target,
        "current_monthly_krw": round(current_monthly, 0),
        "gap_krw": round(gap, 0),
        "scenarios": {}
    }

    if gap <= 0:
        result["scenarios"]["status"] = "✅ 현재 발행 빈도로 이미 목표 달성"
        return result

    # ─────────────────────────────────────────────────────────────────────
    # Scenario (a): 제휴 전환율 증대 (다른 변수 고정)
    # ─────────────────────────────────────────────────────────────────────

    # 현재 제휴 수익 계산
    current_affiliate = sum(
        clicks * (conv_rate / 100) * unit_price * config.affiliate_commission_rate
        for conv_rate, unit_price, clicks in config.affiliate_products.values()
    )

    # 필요한 추가 제휴 수익
    additional_affiliate_needed = gap / config.videos_per_month
    total_affiliate_needed = current_affiliate + additional_affiliate_needed

    # 평균 제휴 인벤토리 기반 필요 전환율
    avg_unit_price = sum(p[1] for p in config.affiliate_products.values()) / len(config.affiliate_products)
    avg_clicks = sum(p[2] for p in config.affiliate_products.values()) / len(config.affiliate_products)

    if avg_clicks > 0:
        target_conversion_rate = (
            total_affiliate_needed /
            (avg_clicks * avg_unit_price * config.affiliate_commission_rate)
        ) * 100
    else:
        target_conversion_rate = float('inf')

    result["scenarios"]["a_conversion_rate"] = {
        "description": "제휴 전환율 증대 (다른 변수 고정)",
        "current_conversion_rate_avg_pct": round(
            sum(p[0] for p in config.affiliate_products.values()) / len(config.affiliate_products), 1
        ),
        "target_conversion_rate_pct": round(target_conversion_rate, 1) if target_conversion_rate != float('inf') else "∞",
        "approach": "A/B 테스트, 더 나은 제품 추천, 상품평 활용",
    }

    # ─────────────────────────────────────────────────────────────────────
    # Scenario (b): 조회수 증대 (다른 변수 고정)
    # ─────────────────────────────────────────────────────────────────────

    target_views = config.views_per_video + (gap / (config.videos_per_month * config.ad_rpm * config.ad_rpm_to_krw / 1000))

    result["scenarios"]["b_views_per_video"] = {
        "description": "영상당 조회수 증대 (다른 변수 고정)",
        "current_views_per_video": config.views_per_video,
        "target_views_per_video": round(target_views, 0),
        "growth_multiple": round(target_views / config.views_per_video, 2),
        "approach": "더 나은 후크, 썸네일, 알고리즘 최적화, SEO",
    }

    # ─────────────────────────────────────────────────────────────────────
    # Scenario (c): 발행 빈도 증대 (다른 변수 고정)
    # ─────────────────────────────────────────────────────────────────────

    target_videos_per_month = target / per_video_profit if per_video_profit > 0 else float('inf')

    result["scenarios"]["c_videos_per_month"] = {
        "description": "월 발행 빈도 증대 (다른 변수 고정)",
        "current_videos_per_month": config.videos_per_month,
        "target_videos_per_month": round(target_videos_per_month, 2) if target_videos_per_month != float('inf') else "∞",
        "approach": "자동화, 배치 촬영, 팀 확대",
    }

    return result


def analyze_sensitivity(config: VideoEconomicsConfig, baseline_profit: float) -> Dict:
    """
    민감도 분석: 각 변수 10% 변화가 수익에 미치는 영향 (무한 재귀 방지)
    """

    sensitivities = {}

    # 각 변수별 10% 변화 계산
    variables = {
        "views_per_video": ("조회수 +10%", 1.1),
        "ad_rpm": ("RPM +10%", 1.1),
        "affiliate_commission_rate": ("제휴 수수료 +10%", 1.1),
        "videos_per_month": ("월 발행 +10%", 1.1),
        "sponsorship_per_video": ("협찬 +10%", 1.1),
    }

    for var_name, (label, multiplier) in variables.items():
        old_val = getattr(config, var_name)
        setattr(config, var_name, old_val * multiplier)

        # 직접 계산 (재귀 방지)
        new_profit, _, _, _ = calculate_per_video_profit(config)
        impact_pct = ((new_profit - baseline_profit) / baseline_profit) * 100

        sensitivities[var_name] = {
            "label": label,
            "impact_pct": round(impact_pct, 2),
        }

        setattr(config, var_name, old_val)  # 원상복구

    # 가장 영향력 있는 레버 찾기
    max_leverage = max(sensitivities.items(), key=lambda x: abs(x[1]["impact_pct"]))

    return {
        "per_variable": sensitivities,
        "highest_leverage": {
            "variable": max_leverage[0],
            "label": max_leverage[1]["label"],
            "impact_pct": max_leverage[1]["impact_pct"],
            "summary": f"{max_leverage[1]['label']}가 가장 크게 영향 (±{max_leverage[1]['impact_pct']:.1f}%)",
        }
    }


def validate_calculations():
    """검증: 계산식이 맞는지 간단히 확인"""

    print("\n" + "="*70)
    print("🔍 검증 (Validation)")
    print("="*70)

    # 예) 곡약즉석밥 54,000원 × 3% ≈ 1,620원/판매
    product_price = 54000
    commission_rate = 0.03
    expected_commission_per_sale = product_price * commission_rate

    assert abs(expected_commission_per_sale - 1620) < 10, f"곤약즉석밥 수수료 계산 오류: {expected_commission_per_sale}"
    print(f"✅ 곤약즉석밥 54,000원 × 3% = {expected_commission_per_sale:.0f}원/판매 (예상: 1,620원)")

    # 광고 RPM 계산 검증: 0.75 USD/1000 views × 1300 KRW = 975원/1000뷰
    ad_rpm_usd = 0.75
    ad_rpm_to_krw = 1300.0
    expected_ad_rpm_krw = ad_rpm_usd * ad_rpm_to_krw

    assert abs(expected_ad_rpm_krw - 975) < 10, f"광고 RPM 계산 오류: {expected_ad_rpm_krw}"
    print(f"✅ 광고 RPM 0.75 USD/1000 views × 1300 KRW = {expected_ad_rpm_krw:.0f}원/1000뷰")

    # 조회수 × RPM 검증: 1500 views × (975/1000) = 1,462원
    views = 1500
    expected_ad_revenue = views * (expected_ad_rpm_krw / 1000)

    assert abs(expected_ad_revenue - 1462) < 10, f"조회수별 광고 수익 계산 오류: {expected_ad_revenue}"
    print(f"✅ 1,500 views × {expected_ad_rpm_krw:.0f}원/1000 = {expected_ad_revenue:.0f}원")

    print("\n✅ 모든 검증 통과\n")


def print_results(results: Dict):
    """결과를 보기 좋게 출력"""

    print("\n" + "="*70)
    print("📊 영상 1편 경제성 분석")
    print("="*70)

    # ─────────────────────────────────────────────────────────────────────
    # 1️⃣ 영상 1편 순이익
    # ─────────────────────────────────────────────────────────────────────
    print("\n[1] 영상 1편 순이익 (KRW)")
    print("-" * 70)

    pvp = results["per_video_profit"]
    print(f"  💰 광고 수익:        {pvp['ad_revenue']:>12,.0f}원")

    if pvp["affiliate_details"]:
        print(f"\n  🤝 제휴 수익 상세:")
        for product, details in pvp["affiliate_details"].items():
            print(f"     {product:20s}: {details['revenue']:>8,.0f}원 "
                  f"({details['clicks_per_video']}클릭 × {details['conversion_rate_pct']}% × {details['unit_price']:,.0f}원 × 3%)")
        print(f"  🤝 제휴 수익 합계:   {pvp['affiliate_revenue']:>12,.0f}원")

    if pvp["sponsorship_revenue"] > 0:
        print(f"  🎯 협찬 수익:        {pvp['sponsorship_revenue']:>12,.0f}원")

    print(f"\n  ✨ [합계] 영상 1편 순이익: {pvp['total']:>12,.0f}원")

    # ─────────────────────────────────────────────────────────────────────
    # 2️⃣ 월 순이익 추정
    # ─────────────────────────────────────────────────────────────────────
    print("\n" + "="*70)
    print("[2] 월 순이익 추정 (현 발행 빈도 기준)")
    print("-" * 70)

    me = results["monthly_estimate"]
    print(f"  📅 월 발행 빈도:     {me['videos_per_month']:>12.2f}편")
    print(f"  💸 영상 1편 순이익:  {me['per_video_profit']:>12,.0f}원")
    print(f"  📈 [추정] 월 순이익: {me['monthly_profit']:>12,.0f}원")
    print(f"     ({me['per_video_profit']:,.0f}원 × {me['videos_per_month']:.2f}편)")

    # ─────────────────────────────────────────────────────────────────────
    # 3️⃣ 목표 역산
    # ─────────────────────────────────────────────────────────────────────
    print("\n" + "="*70)
    print("[3] 목표 역산: 월 1,000만원(₩10M) 달성 시나리오")
    print("-" * 70)

    re = results["reverse_engineering"]
    print(f"  🎯 목표:             {re['target_monthly_krw']:>12,.0f}원/월")
    print(f"  📊 현재:             {re['current_monthly_krw']:>12,.0f}원/월")
    print(f"  📈 필요 추가 수익:    {re['gap_krw']:>12,.0f}원/월")

    if re["gap_krw"] <= 0:
        print(f"\n  ✅ {re['scenarios']['status']}")
    else:
        print(f"\n  3가지 레버:")

        # (a) 전환율
        scenario_a = re["scenarios"]["a_conversion_rate"]
        print(f"\n    (a) 제휴 전환율 증대")
        print(f"        현재: {scenario_a['current_conversion_rate_avg_pct']:.1f}%")
        print(f"        필요: {scenario_a['target_conversion_rate_pct']}%")
        print(f"        방법: {scenario_a['approach']}")

        # (b) 조회수
        scenario_b = re["scenarios"]["b_views_per_video"]
        print(f"\n    (b) 영상당 조회수 증대")
        print(f"        현재: {scenario_b['current_views_per_video']:.0f} views/영상")
        print(f"        필요: {scenario_b['target_views_per_video']:.0f} views/영상")
        print(f"        배수: {scenario_b['growth_multiple']}배")
        print(f"        방법: {scenario_b['approach']}")

        # (c) 발행 빈도
        scenario_c = re["scenarios"]["c_videos_per_month"]
        print(f"\n    (c) 월 발행 빈도 증대")
        print(f"        현재: {scenario_c['current_videos_per_month']:.2f} 편/월")
        print(f"        필요: {scenario_c['target_videos_per_month']} 편/월")
        print(f"        방법: {scenario_c['approach']}")

    # ─────────────────────────────────────────────────────────────────────
    # 4️⃣ 민감도
    # ─────────────────────────────────────────────────────────────────────
    print("\n" + "="*70)
    print("[4] 민감도 분석 (각 변수 +10% 영향)")
    print("-" * 70)

    sens = results["sensitivity"]
    print(f"\n  🔧 각 레버의 영향도:")
    for var_name, details in sens["per_variable"].items():
        impact = details["impact_pct"]
        icon = "📈" if impact > 0 else "📉"
        print(f"     {icon} {details['label']:15s}: {impact:>+6.2f}% 영향")

    highest = sens["highest_leverage"]
    print(f"\n  🚀 가장 큰 레버: {highest['label']} ({highest['impact_pct']:+.2f}%)")
    print(f"     → {highest['summary']}")


# ============================================================================
# 🚀 메인 실행
# ============================================================================

if __name__ == "__main__":
    # 1️⃣ 검증 먼저 실행
    validate_calculations()

    # 2️⃣ 기본 설정으로 계산
    config = VideoEconomicsConfig()
    results = calculate_video_economics(config)

    # 3️⃣ 결과 출력
    print_results(results)

    # 4️⃣ 디버깅용 JSON 출력 (선택)
    print("\n" + "="*70)
    print("📋 JSON 형식 (API/자동화용)")
    print("="*70)
    print(json.dumps(results, indent=2, ensure_ascii=False, default=str))
