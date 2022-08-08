import BADGES from '@/assets/js/badges';

export default [
    {
        id: 1,
        name: 'HTML',
        icon: require('@/assets/html.svg'),
        materials: [
            {
                name: '유튜브',
                contents: [
                    {
                        name: '생활코딩 - WEB1- HTML & Internet',
                        upvoteCount: 0,
                        link: 'https://www.youtube.com/playlist?list=PLuHgQVnccGMDZP7FJ_ZsUrdCGH68ppvPb',
                        badges: []
                    },
                ]
            },
        ]
    },
    {
        id: 2,
        name: 'CSS',
        icon: require('@/assets/css.svg'),
        materials: [
            {
                name: '유튜브',
                contents: [
                    {
                        name: '생활코딩 - WEB2-CSS',
                        upvoteCount: 0,
                        link: 'https://www.youtube.com/playlist?list=PLuHgQVnccGMAnWgUYiAW2cTzSBywFO75B',
                        badges: []
                    },
                    {
                        name: 'Online Tutorials',
                        upvoteCount: 0,
                        link: 'https://www.youtube.com/c/OnlineTutorials4Designers/videos',
                        badges: [BADGES.ENGLISH]
                    },
                ]
            }
        ]
    },
    {
        id: 3,
        name: 'JavaScript',
        icon: require('@/assets/javascript.svg'),
        materials: [
            {
                name: '유튜브',
                contents: [
                    {
                        name: '생활코딩 - JavaScript 입문 수업',
                        upvoteCount: 0,
                        link: 'https://www.youtube.com/playlist?list=PLuHgQVnccGMA4uSig3hCjl7wTDeyIeZVU',
                        badges: []
                    },
                    {
                        name: '엘리의 드림코딩 - 자바스크립트 기초강의',
                        upvoteCount: 0,
                        link: 'https://www.youtube.com/playlist?list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2',
                        badges: []
                    }
                ]
            },
            {
                name: '문서',
                contents: [
                    {
                        name: '모던 JavaScript 튜토리얼',
                        upvoteCount: 0,
                        link: 'https://ko.javascript.info/',
                        badges: [BADGES.KOREAN, BADGES.ENGLISH]
                    },
                    {
                        name: 'MDN Docs',
                        upvoteCount: 0,
                        link: 'https://developer.mozilla.org/ko/docs/Web/JavaScript',
                        badges: [BADGES.KOREAN, BADGES.ENGLISH]
                    }
                ]
            }
        ]
    },
    {
        id: 4,
        name: 'Java',
        icon: require('@/assets/java.svg'),
        materials: [
            {
                name: '유튜브',
                contents: [
                    {
                        name: '남궁성의 정석코딩 - 자바의 정석 기초편',
                        upvoteCount: 0,
                        link: 'https://www.youtube.com/playlist?list=PLW2UjW795-f6xWA2_MUhEVgPauhGl3xIp',
                        badges: []
                    },
                    {
                        name: '생활코딩 - Java 입문 수업',
                        upvoteCount: 0,
                        link: 'https://www.youtube.com/playlist?list=PLuHgQVnccGMCeAy-2-llhw3nWoQKUvQck',
                        badges: []
                    },
                ]
            },
            {
                name: '책',
                contents: [
                    {
                        name: '이펙티브 자바',
                        upvoteCount: 0,
                        link: 'http://www.kyobobook.co.kr/product/detailViewKor.laf?ejkGb=KOR&mallGb=KOR&barcode=9788966262281&orderClick=LAG&Kc=',
                        badges: []
                    },
                ]
            }
        ]
    },
    {
        id: 5,
        name: 'Spring',
        icon: require('@/assets/spring.svg'),
        materials: [
            {
                name: '책',
                contents: [
                    {
                        name: '토비의 스프링 3.1',
                        upvoteCount: 0,
                        link: 'http://www.kyobobook.co.kr/product/detailViewKor.laf?mallGb=KOR&ejkGb=KOR&barcode=9788960773431',
                        badges: []
                    },
                    {
                        name: '스프링 인 액션',
                        upvoteCount: 0,
                        link: 'http://www.yes24.com/Product/Goods/90180239',
                        badges: []
                    },
                ]
            },
            {
                name: '유튜브',
                contents: [
                    {
                        name: '뉴렉처',
                        upvoteCount: 0,
                        link: 'https://www.youtube.com/playlist?list=PLq8wAnVUcTFUHYMzoV2RoFoY2HDTKru3T',
                        badges: []
                    },
                ]
            },
            {
                name: '인프런',
                contents: [
                    {
                        name: '스프링 입문 - 코드로 배우는 스프링 부트, 웹 MVC, DB 접근 기술 (김영한)',
                        upvoteCount: 1,
                        link: '스프링 입문 - 코드로 배우는 스프링 부트, 웹 MVC, DB 접근 기술',
                        badges: [BADGES.FOR_FREE]
                    },
                    {
                        name: '스프링 핵심원리 - 기본편 (김영한)',
                        upvoteCount: 1,
                        link: 'https://www.inflearn.com/course/%EC%8A%A4%ED%94%84%EB%A7%81-%ED%95%B5%EC%8B%AC-%EC%9B%90%EB%A6%AC-%EA%B8%B0%EB%B3%B8%ED%8E%B8/dashboard',
                        badges: [BADGES.NOT_FOR_FREE]
                    },
                    {
                        name: '스프링 핵심원리 - 고급편 (김영한)',
                        upvoteCount: 1,
                        link: 'https://www.inflearn.com/course/%EC%8A%A4%ED%94%84%EB%A7%81-%ED%95%B5%EC%8B%AC-%EC%9B%90%EB%A6%AC-%EA%B3%A0%EA%B8%89%ED%8E%B8/dashboard',
                        badges: [BADGES.NOT_FOR_FREE]
                    },
                    {
                        name: '자바 ORM 표준 JPA 프로그래밍 - 기본편 (김영한)',
                        upvoteCount: 1,
                        link: 'https://www.inflearn.com/course/ORM-JPA-Basic/dashboard',
                        badges: [BADGES.NOT_FOR_FREE]
                    },
                    {
                        name: '실전! 스프링 부트와 JPA 활용1 - 웹 애플리케이션 개발 (김영한)',
                        upvoteCount: 1,
                        link: 'https://www.inflearn.com/course/%EC%8A%A4%ED%94%84%EB%A7%81%EB%B6%80%ED%8A%B8-JPA-%ED%99%9C%EC%9A%A9-1/dashboard',
                        badges: [BADGES.NOT_FOR_FREE]
                    },
                    {
                        name: '실전! 스프링 부트와 JPA 활용2 - API 개발과 성능 최적화 (김영한)',
                        upvoteCount: 1,
                        link: 'https://www.inflearn.com/course/%EC%8A%A4%ED%94%84%EB%A7%81%EB%B6%80%ED%8A%B8-JPA-API%EA%B0%9C%EB%B0%9C-%EC%84%B1%EB%8A%A5%EC%B5%9C%EC%A0%81%ED%99%94/dashboard',
                        badges: [BADGES.NOT_FOR_FREE]
                    },
                    {
                        name: '실전! 스프링 데이터 JPA (김영한)',
                        upvoteCount: 1,
                        link: 'https://www.inflearn.com/course/%EC%8A%A4%ED%94%84%EB%A7%81-%EB%8D%B0%EC%9D%B4%ED%84%B0-JPA-%EC%8B%A4%EC%A0%84/dashboard',
                        badges: [BADGES.NOT_FOR_FREE]
                    },
                ]
            },
        ]
    },
    {
        id: 6,
        name: 'MySQL',
        icon: require('@/assets/mysql.svg'),
        materials: [
            {
                name: '유튜브',
                contents: [
                    {
                        name: '생활코딩 - DATABASE2 - MySQL',
                        upvoteCount: 0,
                        link: 'https://www.youtube.com/playlist?list=PLuHgQVnccGMCgrP_9HL3dAcvdt8qOZxjW',
                        badges: []
                    },
                    {
                        name: '한빛미디어 - [2020개정판]이것이 MySQL이다(8.0)',
                        upvoteCount: 0,
                        link: 'https://www.youtube.com/playlist?list=PLVsNizTWUw7Hox7NMhenT-bulldCp9HP9',
                        badges: []
                    },
                ]
            }
        ]
    },
    {
        id: 7,
        name: 'Vue',
        icon: require('@/assets/vue.svg'),
        materials: [
            {
                name: '유튜브',
                contents: [
                    {
                        name: 'ZeroCho TV',
                        upvoteCount: 0,
                        link: 'https://www.youtube.com/playlist?list=PLcqDmjxt30RsdnPeU0ogHFMoggSQ_d7ao',
                    },
                    {
                        name: 'The Net Ninja',
                        upvoteCount: 0,
                        link: 'https://www.youtube.com/playlist?list=PL4cUxeGkcC9gQcYgjhBoeQH7wiAyZNrYa',
                        badges: [BADGES.ENGLISH]
                    },
                    {
                        name: '코지 코더',
                        upvoteCount: 0,
                        link: 'https://www.youtube.com/playlist?list=PLB7CpjPWqHOtYP7P_0Ls9XNed0NLvmkAh',
                    },
                ]
            },
            {
                name: '문서',
                contents: [
                    {
                        name: 'Vue 2 Guide',
                        upvoteCount: 0,
                        link: 'https://v2.vuejs.org/v2/guide/',
                        badges: [BADGES.OFFICIAL, BADGES.ENGLISH, BADGES.KOREAN]
                    },
                    {
                        name: 'Vue 3 Guide',
                        upvoteCount: 0,
                        link: 'https://vuejs.org/guide/introduction.html',
                        badges: [BADGES.OFFICIAL, BADGES.ENGLISH, BADGES.KOREAN]
                    },
                    {
                        name: 'Vuex',
                        upvoteCount: 0,
                        link: 'https://vuex.vuejs.org/',
                        badges: [BADGES.OFFICIAL, BADGES.ENGLISH, BADGES.KOREAN]
                    },
                ]
            }
        ]
    },
    {
        id: 8,
        name: 'OOP',
        icon: require('@/assets/oop.svg'),
        materials: [
            {
                name: '도서',
                contents: [
                    {
                        name: '클린코드',
                        upvoteCount: 0,
                        link: 'http://www.kyobobook.co.kr/product/detailViewKor.laf?mallGb=KOR&ejkGb=KOR&barcode=9788966260959',
                        badges: []
                    },
                    {
                        name: '객체지향의 사실과 오해 - 조영호',
                        upvoteCount: 0,
                        link: 'http://www.yes24.com/Product/Goods/18249021',
                        badges: []
                    },
                    {
                        name: '오브젝트 - 조영호',
                        upvoteCount: 0,
                        link: 'http://www.yes24.com/Product/Goods/74219491',
                        badges: []
                    },
                ]
            }
        ]
    },
    {
        id: 9,
        name: 'Refactoring',
        icon: require('@/assets/refactoring.svg'),
        materials: [
            {
                name: '유튜브',
                contents: [
                    {
                        name: '백명석 - 클린코더스 강좌',
                        upvoteCount: 0,
                        link: 'https://www.youtube.com/playlist?list=PLeQ0NTYUDTmMM71Jn1scbEYdLFHz5ZqFA',
                        badges: []
                    },
                ]
            }
        ]
    },
]