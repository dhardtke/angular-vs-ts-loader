import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub790Component} from "./stub790.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub790Component
        }])
    ],
    declarations: [
        Stub790Component
    ]
})
export class Stub790Module {

}
