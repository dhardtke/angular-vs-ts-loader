import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub514Component} from "./stub514.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub514Component
        }])
    ],
    declarations: [
        Stub514Component
    ]
})
export class Stub514Module {

}
