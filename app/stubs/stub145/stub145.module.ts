import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub145Component} from "./stub145.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub145Component
        }])
    ],
    declarations: [
        Stub145Component
    ]
})
export class Stub145Module {

}
