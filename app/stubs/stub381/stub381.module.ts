import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub381Component} from "./stub381.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub381Component
        }])
    ],
    declarations: [
        Stub381Component
    ]
})
export class Stub381Module {

}
